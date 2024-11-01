import React from "react";
import ProjectCard from "../../../components/ui/projectCard";
import projects from "../../../data/fakeProjects.json";

export const metaData = {
  title: "Project",
};
export default async function Page(props) {
  const params = await props.params;
  const project = projects.find((v) => String(v.id) === params.id);
  return <ProjectCard {...project} />;
}
