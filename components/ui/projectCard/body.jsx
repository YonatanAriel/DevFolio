import DeveloperDetails from "./developerDetails";
import TechnologiesAndLinks from "./technologiesAndLinks";

function Body({
  developerTitle,
  developerId,
  developerImg,
  developerName,
  description,
  technologies,
  gitHubLink,
  websiteLink,
  id,
  isPortfolio,
}) {
  return (
    <>
      <DeveloperDetails
        developerId={developerId}
        developerImg={developerImg}
        isPortfolio={isPortfolio}
        developerName={developerName}
        developerTitle={developerTitle}
      />
      <div className="px-6 py-4 ">
        <h1 className={`text-2xl font-bold  tracking-wide `}>
          {isPortfolio ? "Portfolio" : developerTitle}
        </h1>
        <p className="py-2 text-lg line-clamp-2 hover:line-clamp-none">
          {description}
        </p>
        <TechnologiesAndLinks
          technologies={technologies}
          gitHubLink={gitHubLink}
          websiteLink={websiteLink}
          id={id}
        />
      </div>
    </>
  );
}
export default Body;
