"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Dropdown from "./Dropdown";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import Image from "next/image";
import { useUploadThing } from '@/lib/uploadthing';
import router, { useRouter } from "next/router";
import { createProject, updateProject } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/database/models/project.model";
import { projectDefaultValues } from "@/constant/index";
import { projectFormSchema } from "@/lib/validator";
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

type ProjectFormProps = {
  userId: string;
  type: "Create" | "Update";
  project?: IProject;
  projectId?: string;
};

const ProjectForm = ({ userId, type, project, projectId }: ProjectFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  const initialValues = project && type === 'Update' 
    ? { 
      ...project, 
    }
    : projectDefaultValues;

  const { startUpload } = useUploadThing('imageUploader')

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues
  })
 
  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if(files.length > 0) {
      const uploadedImages = await startUpload(files)

      if(!uploadedImages) {
        return
      }

      uploadedImageUrl = uploadedImages[0].url
    }

    if(type === 'Create') {
      try {
        const newProject = await createProject({
          project: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: '/profile'
        })

        if(newProject) {
          form.reset();
          router.push(`/projects/${newProject._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
    if(type === 'Update') {
      if(!projectId) {
        router.back()
        return;
      }
      try {
        const updatedProject = await updateProject({
          userId,
          project: { ...values, imageUrl: uploadedImageUrl, _id: projectId },
          path: `/projects/${projectId}`
        })

        if(updatedProject) {
          form.reset();
          router.push(`/projects/${updatedProject._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

    

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
    <main className="flex-1 p-10">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create Model</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Project title" {...field} className="input-field" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Dropdown onChangeHandler={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-500 rounded-lg">
                    <FileUploader 
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
                      setFiles={setFiles}
                    />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center rounded-full  px-4 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                      </svg>
                      <Input placeholder="URL" {...field} className="input-field" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
       
            <Button 
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="button w-full"
            >
              {form.formState.isSubmitting ? (
                'Submitting...'
              ): `${type} Project `}
            </Button>
          </CardContent>
          {/* End of max-w-lg container */}
        </Card>
      </div>
      </main>
    </form>
  </Form>
  )}  

export default ProjectForm
