// pages/blog.tsx

import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/createClient';
import Link from 'next/link'; // Import Link component
import { Post } from '../types'; // Assuming you have defined types for Post
import BlogContent from '@/components/BlogContent';
import Layout from './layout';
import Categories from '@/components/Categories';

// Query to fetch posts from Sanity.io
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export const getStaticProps = async () => {
 
  const posts = await client.fetch(query);

  // Return the fetched data as props
  return {
    props: {
      posts,
    },
    // Revalidate the page every 30 seconds (ISR)
    revalidate: 30,
  };
};

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
    <div>
    <section className="flex flex-wrap gap-2">
        <Categories />
      </section>
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold">Blog</h2>
        </div>
      </main>
      {/* Render BlogContent component with fetched posts */}
      <BlogContent posts={posts} />
    </div>
    </Layout>
  );
};

export default Blog;
