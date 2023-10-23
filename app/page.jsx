import ProjectCard from "../components/ui/projectCard";
import { getAllProjects } from "../functions/frontendFunctions/apiCalls";
// import data from "../data/fakeProjects.json";

export const metaData = {
  title: "DevFolio",
  description: "A place for Developers to show their Portfolios & Projects",
};

export default async function Home() {
  const projects = await getAllProjects();
  console.log(projects);

  return (
    <main className=" flex gap-4 lg:justify-start justify-evenly  flex-wrap py-20 p-1 lg:p-20">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projectName={project.name}
          img={project.photo}
          {...project}
        />
      ))}
    </main>
  );
}
