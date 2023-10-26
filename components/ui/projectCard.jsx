import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import ProjectLike from "./projectLike";
import Comment from "./comment";

export default function ProjectCard({
  projectName,
  technologies,
  developerName,
  img,
  developerImg,
  developerId,

  websiteLink,
  gitHubLink,
  developerTitle,
  projectLikes,
  isPortfolio,
  description,
  id,
  comments,
}) {
  return (
    <div
      className=" max-w-sm text-black font-semibold shadow-lg rounded-lg overflow-hidden backdrop-blur-lg
     h-[100vh] relative shadow-lg shadow-gray-500 "
    >
      <div
        style={{ zIndex: -1 }}
        className="w-full h-[100vh] absolute top-0 left-0  "
      >
        <Image
          src={"/fire-1680605.jpg"}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 920px) 50vw, 50vw"
          className="object-cover object-center "
        />
      </div>
      <div className="w-full h-[42.5vh] absolute top-0 left-0 ">
        {img && (
          <Image
            src={img}
            alt="ojni"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 920px) 50vw, 50vw"
            className="object-cover object-center "
          />
        )}
      </div>
      <div
        style={{ marginTop: "42.5vh", height: "57.5vh" }}
        className=" backdrop-blur-lg z-10 bg-white bg-opacity-30"
      >
        <Link
          href={`/profiles/${developerId}`}
          className={`flex items-center px-6 py-2 ${
            isPortfolio ? "bg-black" : "bg-[#FF4E00]"
          }`}
        >
          <img
            src={developerImg}
            alt=""
            style={{
              width: "9vh",
              height: "9vh",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <a href="">
            {" "}
            <h1
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
              }}
              className={`mx-3 ${
                isPortfolio ? "text-[#FF4E00]" : "text-black"
              } font-semibold text-lg`}
            >
              {developerName + " | " + developerTitle}
            </h1>
          </a>
        </Link>

        <div className="py-4 px-6  ">
          <h1 className={`text-2xl font-bold  tracking-wide `}>
            {isPortfolio ? "Portfolio" : projectName}
          </h1>
          <p className="py-2 text-lg ">{`${description?.slice(0, 60)}...`}</p>
          <div className="flex mt-1">
            {technologies?.map((tech) => (
              <div className="flex items-center  ">
                <h1 className="pr-2 text-sm">{tech}</h1>
              </div>
            ))}
          </div>
          <div className="flex gap-3 text-white items-center mt-5">
            {gitHubLink && (
              <a href={gitHubLink}>
                <BsGithub size={33} />
              </a>
            )}

            {websiteLink && (
              <a href={websiteLink}>
                <img
                  style={{ width: "6vh", height: "6vh" }}
                  src="/icons8-website-96.png"
                ></img>
              </a>
            )}
            <Link href={"/project/" + id}>
              <FiExternalLink size={33} />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 px-6">
          <ProjectLike projectLikes={projectLikes} />
          <Comment />
        </div>
      </div>
    </div>
  );
}
