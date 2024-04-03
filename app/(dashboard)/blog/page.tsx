"use client"
import React, { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/createClient';
import { Post } from '../../../types'
import BlogContent from '@/components/BlogContent';


const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

const Blog = () => {
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

  return (
 
      <div className="flex flex-col border-neutral-200 dark:border-neutral-700 bg-[#121212]  text-white">
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-bold">Blog</h2>
          </div>
        </main>
        <BlogContent posts={posts} />
      </div>
   
  );
};

export default Blog;
