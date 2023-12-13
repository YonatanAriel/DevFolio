"use client";

import { useEffect, useState } from "react";
import ProfileCard from "../../../components/ui/profileCard/ProfileCard";
import { getUser } from "../../../functions/frontendFunctions/apiCalls";

// export async function generateStaticParams() {
//   const res = await getAllUsers();
//   const profiles = await res.json();
//   return profiles?.map((profile) => ({ id: profile._id }));
// }

export default function Profile({ params }) {
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    getUser(params.id).then((data) => setProfileData(data[0]));
  }, []);

  return (
    <>
      {profileData && <ProfileCard {...profileData} img={profileData.photo} />}
    </>
  );
}
