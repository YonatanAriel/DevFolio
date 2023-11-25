"use client";
import { useSearchParams } from "next/navigation";
import ProjectCard from "../../../components/ui/projectCard";
import Popup from "../../../components/ui/1popup";

export default function Projects() {
  const searchParams = useSearchParams();
  const projects = JSON.parse(atob(searchParams.get("data")));
  console.log(projects);

  return (
    <>
      {projects?.length === 0 && (
        <Popup text={"Sorry, nothing was found"} goBackButton={true} />
      )}
      <div className=" flex gap-4 lg:justify-start justify-evenly  flex-wrap py-20 p-1 lg:p-20">
        {projects?.map((p) => (
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
        ))}
      </div>
    </>
  );
}
