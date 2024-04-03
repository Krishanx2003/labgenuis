import Collection from "@/components/project/Collection";
import { getProjectById, getRelatedProjectsByCategory } from "@/lib/actions/project.actions";
import { SearchParamProps } from "@/types";
import Image from 'next/image';
import Link from "next/link"







const ProjectDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const project = await getProjectById(id);
  
    const relatedProjects = await getRelatedProjectsByCategory({
      categoryId: project.category._id,
      projectId: project._id,
      page: searchParams.page as string,
    })
  
    return (
    <>
    <section className="w-full py-12 lg:py-24">
      <div className="container grid items-start gap-4 px-4 text-center md:px-6 lg:gap-10 lg:grid-cols-[1fr_600px] xl:grid-cols-[1fr_700px]">
      <div className="space-y-2 text-left">
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>{project.title}</h2>
            <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  {project.category.name}
                </p>
            </div>
            <div className="space-y-4 text-left">
        <Image 
          src={project.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />
         <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{project.description}</p>
</div>
<div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href={project.url}
            >
              View the project
            </Link>
          </div>
            </div>
        
          </div>
     
    </section>

    {/* projectS with the same category */}
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Related projects</h2>

      <Collection 
          data={relatedProjects?.data}
          emptyTitle="No Projects Found"
          emptyStateSubtext="Come back later"
          collectionType= 'All_projects'
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedProjects?.totalPages}
        />
    </section>
    </>
  )
}

export default ProjectDetails