"use client";
import { useSearchParams } from "next/navigation";
import ProfileCard from "../../../components/ui/profileCard/ProfileCard";

export default function Users() {
  const searchParams = useSearchParams();
  const profiles = JSON.parse(atob(searchParams.get("data")));
  console.log(profiles + 11);
  return profiles?.map((p) => (
    <ProfileCard key={p._id} id={p._id} img={p.photo} {...p} />
  ));
}
