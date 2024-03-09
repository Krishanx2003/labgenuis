import React from 'react';
import Categories from '@/components/Categories';
import Collab from '@/components/Collab';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import { Support } from '@/components/Support';

const Home = () => {
  return (
    <main className="relative">
      {/* <section className="flexStart flex-col paddings">
        <Categories />
      </section> */}

      <div className="mx-4 md:mx-[3.25rem] pt-32 lg:pt-16">
        <Hero />
        <Collab />
      </div>

      <Support />
      <Feature />
    </main>
  );
};

export default Home;
