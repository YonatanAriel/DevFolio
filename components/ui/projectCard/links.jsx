import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Tooltip from "../tooltip";

function Links({ gitHubLink, websiteLink, id }) {
  console.log(id);
  return (
    <div className="flex items-center gap-3 mt-5 text-white">
      {gitHubLink && (
        <Tooltip
          className="transition-all duration-150 ease-linear hover:scale-110 hover:text-black"
          text={"GitHub"}
        >
          <a href={gitHubLink} className="">
            <BsGithub size={33} />
          </a>
        </Tooltip>
      )}

      {websiteLink && (
        <Tooltip
          className="transition-transform duration-150 ease-linear hover:scale-110 "
          text={"Website"}
        >
          <a href={websiteLink}>
            <img
              alt="Website icon"
              className="transition-all duration-150 ease-linear hover:invert"
              style={{ width: "6vh", height: "6vh" }}
              src="/icons8-website-96.png"
            ></img>
          </a>
        </Tooltip>
      )}
      <Tooltip
        className="transition-all duration-150 ease-linear hover:scale-110 hover:text-black"
        text={"Details"}
      >
        <Link href={"/project/" + id}>
          <FiExternalLink size={33} />
        </Link>
      </Tooltip>
    </div>
  );
}
export default Links;
