import React from 'react';
// import Categories from '@/components/Categories';
// import Collab from '@/components/Collab';
// import Feature from '@/components/Feature';
// import Hero from '@/components/Hero';
// import { Support } from '@/components/Support';
import BlogContent from '@/components/BlogContent';
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);
  return (
    <main className="relative">
      {/* {/* <section className="flexStart flex-col paddings">
        <Categories />
      </section> */}

      {/* <div className="mx-4 md:mx-[3.25rem] pt-32 lg:pt-16">
        <Hero />
        <Collab />
        </div>
      <Support />
      <Feature />  */}
<BlogContent posts={posts} />

    </main>
  );
};


