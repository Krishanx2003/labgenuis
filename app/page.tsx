"use client"
import React, { useState, useEffect } from 'react';
import Categories from '@/components/Categories';
import Collab from '@/components/Collab';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import BlogContent from '@/components/BlogContent';
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { Separator } from '@/components/ui/home-separator';
import ProjectCard from '@/components/project/projectcard';
import { projects } from '@/data/projects';

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
    <main className="relative bg-[#121212]  text-white">
      <div className="mx-4 md:mx-[3.25rem] pt-32 lg:pt-16">
        <Hero />
        <Collab />
      </div>
      <div className="mx-auto grid max-w-[1440px] grid-flow-row-dense grid-cols-1 gap-10 py-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {limitedProjects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
     
      <Feature />
      <Separator my-8 />
      <BlogContent posts={posts.slice(0, 3)} />
    </main>
  );
};

export default Home;
