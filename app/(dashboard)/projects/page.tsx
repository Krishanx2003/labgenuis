import { Metadata } from "next"
import CategoryFilter from '@/components/project/CategoryFilter';
import Collection from '@/components/project/Collection';
import Search from '@/components/project/Search';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area"
import { getAllProjects } from '@/lib/actions/project.actions';
import { SearchParamProps } from "../../../types/mongodb"
import Image from 'next/image';
import Link from 'next/link';
import { getProjectById, getRelatedProjectsByCategory } from "@/lib/actions/project.actions";
import { Sidebar } from "../../../components/project/sidebar";
import { workflows } from "./data/workflows";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs"
import CreateEvent from "./create/page";
import ProjectDetails from "./[id]/page";

export const metadata: Metadata = {
  title: "Models",
  description: "Ai Models",
}

export default async function Projects({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const projects = await getAllProjects({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
    <div className="border-t">

   
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <Tabs defaultValue="model" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="model" className="relative">
                  Model
                </TabsTrigger>
                <TabsTrigger value="create">Create</TabsTrigger>
                <TabsTrigger value="description" >
                Description
                </TabsTrigger>
              </TabsList>
             
            </div>
            <TabsContent
              value="model"
              className="border-none p-0 outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                   Model 
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Top picks for you. Updated daily.
                  </p>
                </div>
                <div className="ml-auto mr-4">
             
             <CategoryFilter />
                 </div>
                 <div className="ml-auto mr-4">
                 <Search />
                 </div>
              </div>
              <Separator className="my-4" />
              <div className="relative">
                <ScrollArea>
                  <div className="flex space-x-4 pb-4">
                    <Collection 
                      data={projects?.data} // Pass fetched projects data
                      emptyTitle="No project Found"
                      emptyStateSubtext="Come back later"
                      limit={6}
                      page={Number(searchParams?.page) || 1}
                      totalPages={projects?.totalPages}
                      collectionType="All_projects"
                    />
                  </div>
                </ScrollArea>
              </div>
             
            
            </TabsContent>
            <TabsContent
                      value="create"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                           Create Model
                          </h2>
                          <p className="text-sm text-muted-foreground">
                          Create Model for the project
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <CreateEvent />
                    </TabsContent>
                  
          </Tabs>
          </div>
            </div>
          </div>
       
    </>
  );
}