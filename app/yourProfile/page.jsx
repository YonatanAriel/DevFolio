import Link from "next/link";
import UserProfile from "../../components/ui/userProfile";

export default async function YourProfile() {
  const buttonStyle =
    " py-4 px-5  inline-flex items-center justify-center hover:bg-primary-color   bg-black overflow-hidden text-sm  text-gray-900 text-primary-color font-bold rounded-md group bg-gradient-to-br  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800";
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-evenly items-center pt-20">
      <Link href={"/projects/addProject"} className={buttonStyle}>
        Add Project
      </Link>
      <UserProfile />
      <button href={"/projects/addProject"} className={buttonStyle}>
        Update Details
      </button>
    </div>
  );
}
