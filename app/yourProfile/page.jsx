import Link from "next/link";
import UserProfile from "../../components/ui/userProfile";

export default async function YourProfile() {
  return (
    <div>
      {/* <Link href={"/projects/addProject"}>Add Project</Link> */}
      <UserProfile />
      <Link
        href={"/projects/addProject"}
        className="  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-black to-primary-color group-hover:from-black group-hover:to-primary-color hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className=" p-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0 font-bold">
          Add Project
        </span>
      </Link>
    </div>
  );
}
