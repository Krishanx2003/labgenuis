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
        <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
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
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
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
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <FileUploader 
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
                      setFiles={setFiles}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>


                      <Input placeholder="URL" {...field} className="input-field" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>


        <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): `${type} Project `}</Button>
      </form>
    </Form>
  )
}

export default ProjectForm
