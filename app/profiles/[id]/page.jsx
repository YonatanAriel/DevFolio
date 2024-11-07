"use client";

import { useEffect, useState, use } from "react";
import ProfileCard from "../../../components/ui/profileCard/ProfileCard";
import { getUser } from "../../../functions/frontendFunctions/apiCalls";

// export async function generateStaticParams() {
//   const res = await getAllUsers();
//   const profiles = await res.json();
//   return profiles?.map((profile) => ({ id: profile._id }));
// }

export default function Profile(props) {
  const params = use(props.params);
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    getUser(params.id).then((data) => setProfileData(data[0]));
  }, []);

  return (
    <div className="flex flex-wrap py-20 gap-x-10 gap-y-10 sm:px-10 lg:justify-normal justify-evenly lg:p-20">
      {profileData && <ProfileCard {...profileData} img={profileData.photo} />}
    </div>
  );
}
