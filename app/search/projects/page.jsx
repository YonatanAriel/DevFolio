"use client";
import { useSearchParams } from "next/navigation";
import ProjectCard from "../../../components/ui/projectCard/projectCard";
import Popup from "../../../components/ui/popup";

export default function Projects() {
  const searchParams = useSearchParams();
  const projects = JSON.parse(atob(searchParams.get("data")));

  return (
    <>
      {projects?.length === 0 && (
        <Popup text={"Sorry, nothing was found"} goBackButton={true} />
      )}
      <div className="flex flex-wrap gap-4 p-1 py-20 lg:justify-start justify-evenly lg:p-20">
        {projects?.map((p, i) => (
          <ProjectCard
            key={`${p.id}${i}`}
            projectName={p.name}
            developerName={p.userId.name}
            developerImg={p.userId.photo}
            developerId={p.userId._id}
            developerTitle={p.userId.occupation}
            img={p.photo}
            {...p}
          />
        ))}
      </div>
    </>
  );
}
