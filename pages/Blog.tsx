import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/createClient';
import BlogContent from '@/components/BlogContent';

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

const Blog = ({ posts }) => {
  return (
    <div>
      {/* Render BlogContent component with fetched posts */}
      <BlogContent posts={posts} />
    </div>
  );
};

export default Blog;
