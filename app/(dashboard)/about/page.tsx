import React from "react";
import { TracingBeam } from "../../../components/ui/tracing-beam"; // Import TracingBeam component

import Image from "next/image";

export default function About() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {about.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
           

            <p className= "text-2xl mb-4">
              {item.title}
            </p>

            <div className="text-xl ">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const about = [
  {
    title: "About Us",
    description: (
      <>
        <p>
        Welcome to Labgenius, your ultimate destination for exploring the fascinating world of data science, machine learning, artificial intelligence, natural language processing, robotics, and more.
        </p>
        <p>
At Labgenius, we believe in the power of knowledge and innovation to transform the way we understand and interact with the world around us. Our platform is designed to be a hub for enthusiasts, practitioners, and learners alike, providing a diverse range of resources and opportunities to expand your skills and knowledge in cutting-edge technologies.
        </p>
        
      </>
    ),
   
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Mission",
    description: (
      <>
        <p>
       

Our mission is to democratize access to education and information in the fields of data science, machine learning, AI, NLP, robotics, and beyond. We aim to empower individuals from all backgrounds to explore, learn, and innovate in these exciting domains, regardless of their prior experience or expertise.
        </p>
        
      </>
    ),
    
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Team",
    description: (
      <>
        <p>
      

Labgenius is driven by a team of passionate individuals dedicated to promoting education, innovation, and collaboration in the fields of data science, machine learning, AI, NLP, robotics, and beyond. Our team members bring diverse backgrounds and expertise, united by a shared vision of making learning accessible and enjoyable for all.
        </p>
      </>
    ),
  
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
