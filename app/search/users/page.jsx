"use client";
import { useSearchParams } from "next/navigation";
import ProfileCard from "../../../components/ui/profileCard/ProfileCard";
import Popup from "../../../components/ui/popup";

export default function Users() {
  const searchParams = useSearchParams();
  const profiles = JSON.parse(atob(searchParams.get("data")));
  console.log(profiles + 11);
  return (
    <>
      {profiles?.length === 0 && (
        <Popup text={"Sorry, nothing was found"} goBackButton={true} />
      )}
      <div className="flex  flex-wrap lg:justify-start justify-evenly gap-10 py-20 px-10 lg:p-20">
        {profiles?.map((p) => (
          <ProfileCard key={p._id} id={p._id} img={p.photo} {...p} />
        ))}
      </div>
    </>
  );
}
