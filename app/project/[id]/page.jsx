import React from "react";
import ProjectCard from "../../../components/ui/projectCard";
import projects from "../../../data/fakeProjects.json";

export default function Page({ params }) {
  const project = projects.find((v) => String(v.id) === params.id);
  return <ProjectCard {...project} />;
}
