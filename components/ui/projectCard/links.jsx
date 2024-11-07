import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function Links({ gitHubLink, websiteLink, id }) {
  return (
    <div className="flex items-center gap-3 mt-5 text-white">
      {gitHubLink && (
        <a
          href={gitHubLink}
          className="transition-all duration-150 ease-linear hover:scale-110 hover:text-black"
        >
          <BsGithub size={33} />
        </a>
      )}

      {websiteLink && (
        <a
          href={websiteLink}
          className="transition-transform duration-150 ease-linear hover:scale-110 "
        >
          <img
            className="transition-all duration-150 ease-linear hover:invert"
            style={{ width: "6vh", height: "6vh" }}
            src="/icons8-website-96.png"
          ></img>
        </a>
      )}
      <Link
        className="transition-all duration-150 ease-linear hover:scale-110 hover:text-black"
        href={"/project/" + id}
      >
        <FiExternalLink size={33} />
      </Link>
    </div>
  );
}
export default Links;
