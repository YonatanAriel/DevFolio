"use client";
import { useEffect, useState, use } from "react";
import { getUserProjects } from "../../../../functions/frontendFunctions/apiCalls";
import ProjectCard from "../../../../components/ui/projectCard/projectCard";
import Popup from "../../../../components/ui/popup";

export default function Page(props) {
  const params = use(props.params);
  const [userProjects, setUserProjects] = useState("");
  useEffect(() => {
    getUserProjects(params.id).then((res) => setUserProjects(res));
  }, []);

  return (
    <>
      {/* {userProjects?.length === 0 &&  */}
      {userProjects && userProjects.length === 0 && (
        <Popup
          text={"Sorry, This user has no projects yet"}
          goBackButton={true}
        />
      )}
      <div className="flex flex-wrap gap-4 p-1 py-20  lg:justify-start justify-evenly lg:p-20">
        {userProjects &&
          userProjects?.map((p, i) => (
            <ProjectCard
              key={`${p.id}${i}`}
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
