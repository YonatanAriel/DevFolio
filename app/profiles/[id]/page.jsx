import ProfileCard from "../../../components/ui/profileCard/ProfileCard";
import { getUser } from "../../../functions/frontendFunctions/apiCalls";

export async function generateStaticParams() {
  const res = await getAllUsers();

  const profiles = await res.json();
  return profiles.map((profile) => ({ id: profile._id }));
}

export default async function Profile({ params }) {
  const profile = await getUser(params.id);
  return <ProfileCard props={...profile} />;
}
