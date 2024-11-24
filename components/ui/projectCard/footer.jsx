import Tooltip from "../tooltip";
import Comment from "./comment";
import ProjectLike from "./projectLike";

function Footer({ projectLikes }) {
  return (
    <div className="flex items-center gap-2 px-6 ">
      <ProjectLike projectLikes={projectLikes} />
      <Tooltip tooltipStyle={"left-11"} text={"This feature is not stable yet"}>
        <Comment />
      </Tooltip>
    </div>
  );
}
export default Footer;
