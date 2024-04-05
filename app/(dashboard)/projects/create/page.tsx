import ProjectForm from "@/components/project/ProjectForm";

import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  console.log("Current userId:", userId); // Logging current userId

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
     <div className="wrapper my-4">
        <ProjectForm userId={userId} type="Create" />
      </div>
      </section>
    </>
  );
};

export default CreateEvent;
