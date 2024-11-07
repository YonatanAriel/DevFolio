import ProfileCard from "../../components/ui/profileCard/ProfileCard";
import { getAllUsers } from "../../functions/frontendFunctions/apiCalls";

export const metaData = {
  title: "profiles",
};

export default async function Profiles() {
  const profiles = await getAllUsers();

  return (
    <div className="flex flex-wrap py-20 gap-x-10 gap-y-10 sm:px-10 lg:justify-normal justify-evenly lg:p-20">
      {profiles?.map((p, i) => (
        <ProfileCard
          key={`${p._id}${i}`}
          id={p._id}
          img={p.photo}
          name={p.name}
          about={p.about}
          links={p.links}
          totalLikes={p.totalLikes}
          portfolioLink={p.portfolioLink}
          occupation={p.occupation}
        />
      ))}
    </div>
  );
}
