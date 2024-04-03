
import CategoryFilter from '@/components/project/CategoryFilter';
import Collection from '@/components/project/Collection';
import Search from '@/components/project/Search';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { getAllProjects } from '@/lib/actions/project.actions';
import { SearchParamProps } from "../../../types/mongodb"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Import useState and useEffect


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];




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
     <HeroParallax products={products} />;


    
  
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-primary"> happen - Where Every Click Unveils an Adventure!</h1>
            <p className="p-regular-20 md:p-regular-24 text-primary">Join us in discovering the unexpected. Explore, connect, and make every moment unforgettable with Happen!</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="projects/create">Explore Now</Link>
            </Button>
          </div>
          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 
     
      <section id="project" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-primary">Trust by Thousands of project</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection 
          data={projects?.data} // Pass fetched projects data
          emptyTitle="No project Found"
          emptyStateSubtext="Come back later"
          limit={6}
          page={Number(searchParams?.page) || 1}
          totalPages={projects?.totalPages}
          collectionType= 'All_projects'
        />
      </section>
    
    </>
  );
}
