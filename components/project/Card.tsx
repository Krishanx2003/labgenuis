import { IProject } from '@/lib/database/models/project.model';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';

type CardProps = {
  project: IProject;
 
};

const Card = ({ project }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  


  return (
    <div className="h-[20rem] w-full flex items-center justify-center">
       <PinContainer
        title={project.url}
        href={project.url}
      >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <Link href={`/projects/${project._id}`} className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">{project.title}
        </Link>
     
      <div className="text-base !m-0 !p-0 font-normal">
        {project.category && (
          <p className="text-slate-500">
            {project.category.name}
          </p>
        )}
        </div>
        <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {project.creator.firstName} {project.creator.lastName}
          </p>
      
      
        <Link href={`/projects/${project._id}`} 
          style={{ backgroundImage: `url(${project.imageUrl})` }}
          className="flex flex-1 w-full rounded-lg mt-4 "
        >
      
          <Image src={project.imageUrl} alt="Project Image" width={400} height={380} />
    
      </Link>
      </div>
      </PinContainer>
    </div>
  );
};

export default Card;
