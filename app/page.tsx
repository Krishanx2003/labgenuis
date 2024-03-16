"use client"
import React, { useState, useEffect } from 'react';
import Categories from '@/components/Categories';
import Collab from '@/components/Collab';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import { Support } from '@/components/Support';
import BlogContent from '@/components/BlogContent';
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default function Home() {
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

  return (
    <main className="relative">
      

      <div className="mx-4 md:mx-[3.25rem] pt-32 lg:pt-16">
        <Hero />
        <Collab />
      </div>

      <Support />
      <Feature /> 

      <BlogContent posts={limitedPosts} /> {/* Pass the limited posts to BlogContent */}
    </main>
  );
};
