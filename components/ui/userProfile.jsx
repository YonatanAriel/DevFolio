"use client";

import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/mainContext";
import ProfileCard from "./profileCard/ProfileCard";
import { getUserByToken } from "../../functions/frontendFunctions/apiCalls";
import LoadingSpinner from "./loadingSpinner";

export default function UserProfile() {
  const { token } = useContext(MainContext);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  useEffect(() => {
    if (token) {
      getUserByToken(token).then((data) => setUserData(data));
    }
  }, []);

  return userData ? (
    <ProfileCard
      id={userData._id}
      img={userData.photo}
      name={userData.name}
      about={userData.about}
      links={userData.links}
      totalLikes={userData.totalLikes}
      portfolioLink={userData.portfolioLink}
      occupation={userData.occupation}
    />
  ) : (
    <LoadingSpinner />
  );
}
