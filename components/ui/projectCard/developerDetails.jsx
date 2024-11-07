import Link from "next/link";
import DeveloperImg from "./developerImg";

function DeveloperDetails({
  developerId,
  developerImg,
  isPortfolio,
  developerName,
  developerTitle,
}) {
  return (
    <Link
      href={`/profiles/${developerId}`}
      className={`flex items-center px-6 py-[0.7rem] ${
        isPortfolio ? "bg-black" : "bg-[#FF4E00]"
      }`}
    >
      <DeveloperImg developerImg={developerImg} />
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
    </Link>
  );
}
export default DeveloperDetails;
