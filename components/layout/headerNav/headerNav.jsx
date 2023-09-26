import Link from "next/link";
import MobileMenu from "./mobileMenu/mobileMenu";
import Search from "./search/search";
import { GrHomeRounded } from "react-icons/gr";
export default function HeaderNav() {
  return (
    <nav
      //  bg-black
      className="
      flex sticky left-0 right-0 top-0 z-10 
       
    items-center  gap-3 py-3 px-4 md:px-8 backdrop-blur-lg "
    >
      <h3>
        {/* text-white */}
        <span
          className="
         text-black text-2xl font-semibold"
        >
          Dev
        </span>
        <span
          className="
            text-2xl font-semibold text-[#FF4E00]"
        >
          Folio
        </span>
      </h3>
      <div className="lg:mx-auto ml-auto flex gap-4 relative ">
        <Search />
        <div className="font-semibold text-lg text-black  gap-8  tracking-wide items-center hidden lg:flex">
          <Link className="hover:text-[#FF400]" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-[#FF400]" href={"/profiles"}>
            Profiles
          </Link>
          {/* if logged in  */}
          <Link className="hover:text-[#FF400]" href={"/profiles"}>
            Your Profile
          </Link>
          {/* if didnt logged in  */}
        </div>
      </div>

      <MobileMenu />
    </nav>
  );
}
