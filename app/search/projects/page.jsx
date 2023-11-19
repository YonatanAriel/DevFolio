"use client";
import { useSearchParams } from "next/navigation";
import ProjectCard from "../../../components/ui/projectCard";

export default function Projects() {
  const searchParams = useSearchParams();
  const projects = JSON.parse(atob(searchParams.get("data")));
  console.log(projects, 12);

  return (
    projects &&
    projects.map((p) => (
      <ProjectCard
        key={p.id}
        projectName={p.name}
        developerName={p.userId.name}
        developerImg={p.userId.photo}
        developerId={p.userId._id}
        developerTitle={p.userId.occupation}
        img={p.photo}
        {...p}
      />
    ))
  );
}
