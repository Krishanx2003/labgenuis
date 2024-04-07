import ProjectForm from "@/components/project/ProjectForm";

import { auth } from "@clerk/nextjs";

const CreateProject = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  console.log("Current userId:", userId); // Logging current userId

  return (
    <>
    
        <ProjectForm userId={userId} type="Create" />
     
      
    </>
  );
};

export default CreateProject;
