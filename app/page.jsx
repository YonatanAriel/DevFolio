import ProjectCard from "../components/ui/projectCard";
import data from "../data/fakeProjects.json";

export const metaData = {
  title: "DevFolio",
  description: "A place for Developers to show their Protfolios & Projects",
};

export default async function Home() {
  return (
    <main className=" flex gap-4 lg:justify-start justify-evenly  flex-wrap py-20 p-1 lg:p-20">
      {data?.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </main>
  );
}
