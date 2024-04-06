'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database';
import Project from '@/lib/database/models/project.model';
import User from '@/lib/database/models/user.model';
import Category from '@/lib/database/models/category.model';
import { handleError } from '@/lib/utils';

import {
  CreateProjectParams,
  UpdateProjectParams,
  DeleteProjectParams,
  GetAllProjectsParams,
  GetProjectsByUserParams,
  GetRelatedProjectsByCategoryParams,
} from '@/types/mongodb';

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: 'i' } });
};

const populateProject = (query: any) => {
  return query
  .populate({ path: 'creator', model: User, select: '_id firstName lastName' })
    .populate({ path: 'category', model: Category, select: '_id name' });
};

// CREATE
export async function createProject({ project, path }: CreateProjectParams) {
  try {
    await connectToDatabase()

    const newProject = await Project.create({ ...project, category: project.categoryId })
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newProject))
  } catch (error) {
    handleError(error)
  }
}

// GET ONE project BY ID
export async function getProjectById(projectId: string) {
  try {
    await connectToDatabase()

    const project = await populateProject(Project.findById(projectId))

    if (!project) throw new Error('Project not found')

    return JSON.parse(JSON.stringify(project))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updateProject({ userId, project, path }: UpdateProjectParams) {
  try {
    await connectToDatabase()

    const projectToUpdate = await Project.findById(project._id)
    if (!projectToUpdate || projectToUpdate.creator.toHexString() !== userId) {
      throw new Error('Unauthorized or project not found')
    }

    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      { ...project, category: project.categoryId },
      { new: true }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedProject))
  } catch (error) {
    handleError(error)
  }
}

// DELETE
export async function deleteProject({ projectId, path }: DeleteProjectParams) {
  try {
    await connectToDatabase()

    const deletedProject = await Project.findByIdAndDelete(projectId)
    if (deletedProject) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

// GET ALL Projects
export async function getAllProjects({ query, limit = 6, page, category }: GetAllProjectsParams) {
  try {
    await connectToDatabase()

    const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
    const categoryCondition = category ? await getCategoryByName(category) : null
    const conditions = {
      $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
    }

    const skipAmount = (Number(page) - 1) * limit
    const projectsQuery = Project.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const projects = await populateProject(projectsQuery)
    const projectsCount = await Project.countDocuments(conditions)

    return {
      data: JSON.parse(JSON.stringify(projects)),
      totalPages: Math.ceil(projectsCount / limit),
    }
  } catch (error) {
    handleError(error)
  }
}

// GET PROJECTS BY CREATOR
export async function getProjectsByUser({ userId, limit = 6, page }: GetProjectsByUserParams) {
  try {
    await connectToDatabase()

    const conditions = { creator: userId }
    const skipAmount = (page - 1) * limit

    const projectsQuery = Project.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const projects = await populateProject(projectsQuery)
    const projectsCount = await Project.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(projects)), totalPages: Math.ceil(projectsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}

// GET RELATED projectS: projectS WITH SAME CATEGORY
export async function getRelatedProjectsByCategory({
  categoryId,
  projectId,
  limit = 3,
  page = 1,
}: GetRelatedProjectsByCategoryParams) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { $and: [{ category: categoryId }, { _id: { $ne: projectId } }] }

    const projectsQuery = Project.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const projects = await populateProject(projectsQuery)
    const projectsCount = await Project.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(projects)), totalPages: Math.ceil(projectsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}
