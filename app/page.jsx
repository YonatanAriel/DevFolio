import ProjectCard from "../components/ui/projectCard";
import { getAllProjects } from "../functions/frontendFunctions/apiCalls";

export const metaData = {
  title: "DevFolio",
  description: "A place for Developers to show their Portfolios & Projects",
};

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <main className=" flex gap-4 lg:justify-start justify-evenly  flex-wrap py-20 p-1 lg:p-20">
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          projectName={project.name}
          developerName={project.userId.name}
          developerImg={project.userId.photo}
          developerId={project.userId._id}
          developerTitle={project.userId.occupation}
          img={project.photo}
          {...project}
        />
      ))}
    </main>
  );
}
