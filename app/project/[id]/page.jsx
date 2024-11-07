export const dynamic = "force-dynamic";

import { Project } from "DL/models/Project.model";
import ProjectCard from "../../../components/ui/projectCard/projectCard";
import connectToDB from "../../../DL/connectToDB";

export const metaData = {
  title: "Project",
};

export default async function Page({ params }) {
  const { id } = await params;

  await connectToDB();

  const project = await Project.findOne({ _id: id }).populate(
    "userId",
    "name occupation photo _id"
  );

  return (
    <div className="flex flex-wrap gap-4 px-2 py-20 lg:px-20 sm:justify-center lg:justify-normal justify-evenly lg:p-20">
      <ProjectCard
        key={`${project.id}`}
        projectName={project.name}
        developerName={project.userId.name}
        developerImg={project.userId.photo}
        developerId={project.userId._id}
        developerTitle={project.userId.occupation}
        technologies={project.technologies}
        img={project.photo}
        websiteLink={project.websiteLink}
        gitHubLink={project.gitHubLink}
        id={project._id}
        description={project.description}
        isPortfolio={project.isPortfolio}
        {...project}
      />
    </div>
  );
}
