import ProjectCard from '@/components/project/projectcard';
import { projects } from '@/data/projects';

const allProjects = projects;

const Resource = () => {
  return (
    <main>
      <div className="mx-auto grid max-w-[1440px] grid-flow-row-dense grid-cols-1 gap-10 py-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {allProjects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </main>
  );
};

export default Resource;