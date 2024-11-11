import Link from "next/link";
import UserProfile from "../../components/ui/userProfile";

export default async function YourProfile() {
  const buttonStyle =
    " py-4 px-5 md:px-10 flex  items-center justify-center hover:bg-primary-color   bg-black overflow-hidden text-sm  text-gray-900 text-primary-color font-bold rounded-md group bg-gradient-to-br  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800";
  return (
    <div className="flex flex-col  md:justify-center md:flex-row w-full min-h-[90vh]   items-center pt-20  z-50">
      <UserProfile />
      <div
        className={`flex flex-col md:h-[400px] -mt-6 md:mt-0 md:gap-4  md:ml-4 md:w-fit  gap-4 border-solid  w-[350px] max-w-[95vw]`}
      >
        <Link
          href={"/projects/addProject"}
          className={`${buttonStyle} transition-all duration-300 text-center hover:scale-95  flex-grow `}
        >
          Add Project
        </Link>
        <Link
          href={"/yourProfile/updateDetails"}
          className={`${buttonStyle}  text-center transition-all duration-300 hover:scale-95 flex-grow `}
        >
          Update Details
        </Link>
      </div>
    </div>
  );
}
