import ProfileCard from "../../components/ui/profileCard/ProfileCard";
export const metaData = {
  title: "profiles",
};
export default function Profiles() {
  return (
    <div className="flex flex-wrap  lg:justify-start justify-evenly gap-10 py-20 px-10 lg:p-20">
      <ProfileCard />
    </div>
  );
}
