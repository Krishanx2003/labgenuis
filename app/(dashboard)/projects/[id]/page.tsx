import Collection from "@/components/project/Collection";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getProjectById, getRelatedProjectsByCategory } from "@/lib/actions/project.actions";
import { SearchParamProps } from "@/types/mongodb";
import Image from 'next/image';
import Link from "next/link"
import { Sidebar } from "../components/sidebar";
import { workflows } from "../data/workflows";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ProjectDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const project = await getProjectById(id);
  
    const relatedProjects = await getRelatedProjectsByCategory({
      categoryId: project.category._id,
      projectId: project._id,
      page: searchParams.page as string,
    })
  
    return (
      <>
      <div className="border-t">
  <div className="bg-background">
    <div className="grid lg:grid-cols-5">
      <Sidebar workflows={workflows} className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <section className="wrapper my-8">
          <div className="flex flex-col gap-4">
          
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {project.title}
            </h2>
            <p className=" rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {project.category.name}
            </p>
          </div>
          <div className="space-y-4 text-left">
            <Image
              src={project.imageUrl}
              alt="hero image"
              width={500}
              height={500}
              className="h-full min-h-[300px] object-cover object-center"
            />
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href={project.url}
              >
                View the project
              </a>
            </div>
          </div>
        </section>
        <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Made for You
                </h2>
                <p className="text-sm text-muted-foreground">
                  Related projects
                </p>
              </div>
              <Separator className="my-4" />
    
          <Collection
            data={relatedProjects?.data}
            emptyTitle="No Projects Found"
            emptyStateSubtext="Come back later"
            collectionType="All_projects"
            limit={3}
            page={searchParams.page as string}
            totalPages={relatedProjects?.totalPages}
          />
     
      </div>
    </div>
  </div>
</div>
</div>

     
    </>
    
  )
}

export default ProjectDetails