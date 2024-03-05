import Categories from '@/components/Categories'
import React from 'react'

const Home = () => {
  return (
   <>
   <section className="flexStart flex-col paddings">
        <Categories />

        <p className="no-result-text text-center">No projects found, go create some first.</p>
      </section>
 </>
  )
}

export default Home


