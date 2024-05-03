"use client"
import React, { useState, useEffect } from 'react';
import Categories from '@/components/Categories';

import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import BlogContent from '@/components/BlogContent';
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Separator } from '@/components/ui/home-separator';
import ProjectCard from '@/components/project/projectcard';
import { projects } from '@/data/projects';
import { MovingCards } from '@/components/MovingCards';
import Footer from '@/components/Footer';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';


const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const limitedPosts = posts.slice(0, 3); // Slice the array to show only the first three posts
  const limitedProjects = projects.slice(0, 4);
  return (
    <main className="container relative ">
      <div className="mx-4 md:mx-[3.25rem] pt-32 lg:pt-16">
        <Hero />
        <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-black dark:text-white">
                    <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                      <div className="text-7xl font-bold text-center lg:text-[180px] md:text-[120px] sm:text-[90px]">
                        OpenMind
                      </div>
                    </div>
                    {/* </span> */}
                  </h1>
                </>
              }>
              <Image
                src={`/assets/images/preview.png`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full items-center"
                draggable={false}
              />
            </ContainerScroll>
       
      </div>
      <div className="mx-auto grid max-w-[1440px] grid-flow-row-dense grid-cols-1 gap-10 py-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {limitedProjects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
     
      <Feature />
      <Separator my-8 />
      <BlogContent posts={posts.slice(0, 3)} />
      <Separator my-8 />
      <MovingCards />
      <Footer />
    </main>
  );
};

export default Home;
