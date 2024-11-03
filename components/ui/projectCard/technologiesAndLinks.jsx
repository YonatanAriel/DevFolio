import Technologies from "./technologies";
import Links from "./links";

function TechnologiesAndLinks({ technologies, gitHubLink, websiteLink, id }) {
  const s = "ss";
  return (
    <>
      <Technologies technologies={technologies} />
      <Links gitHubLink={gitHubLink} websiteLink={websiteLink} id={id} />{" "}
    </>
  );
}
export default TechnologiesAndLinks;
