"use client";
import { useEffect, useState } from "react";
import { getUserProjects } from "../../../../functions/frontendFunctions/apiCalls";
import ProjectCard from "../../../../components/ui/projectCard";
import Popup from "../../../../components/ui/popup";

export default function Page({ params }) {
  const [userProjects, setUserProjects] = useState("");
  useEffect(() => {
    getUserProjects(params.id).then((res) => setUserProjects(res));
  }, []);

  return (
    <>
      {userProjects?.length === 0 && (
        <Popup
          text={"Sorry, This user has no projects yet"}
          goBackButton={true}
        />
      )}
      <div className=" flex gap-4 lg:justify-start justify-evenly flex-wrap py-20 p-1 lg:p-20">
        {userProjects &&
          userProjects?.map((p) => (
            <ProjectCard
              key={p.id}
              projectName={p.name}
              developerName={p.userId.name}
              developerImg={p.userId.photo}
              developerTitle={p.userId.occupation}
              img={p.photo}
              {...p}
            />
          ))}
      </div>
    </>
  );
}
