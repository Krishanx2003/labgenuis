// pages/blog.tsx

import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/createClient';
import { Post } from '../types';
import BlogContent from '@/components/BlogContent';
import Layout from './layout';

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export const getStaticProps = async () => {
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
};

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      <div>
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-bold">Blog</h2>
          </div>
        </main>
        <BlogContent posts={posts} />
      </div>
    </Layout>
  );
};

export default Blog;
