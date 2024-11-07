import HeaderAndBackground from "./headerAndBackground";
import Body from "./body";
import Footer from "./footer";

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
  console.log(id, 5555);
  return (
    <div
      className=" max-w-sm text-black font-semibold shadow-lg flex-grow rounded-lg overflow-hidden backdrop-blur-lg
     h-[100vh] relative  shadow-gray-500 "
    >
      <HeaderAndBackground img={img} />
      <div
        style={{ marginTop: "42.5vh", height: "57.5vh" }}
        className="z-10 bg-white backdrop-blur-lg bg-opacity-30"
      >
        <Body
          developerTitle={developerTitle}
          developerId={developerId}
          developerImg={developerImg}
          developerName={developerName}
          description={description}
          technologies={technologies}
          gitHubLink={gitHubLink}
          websiteLink={websiteLink}
          id={id}
          isPortfolio={isPortfolio}
        />
        <Footer projectLikes={projectLikes} />
      </div>
    </div>
  );
}
