import Comment from "./comment";
import ProjectLike from "./projectLike";

function Footer({ projectLikes }) {
  return (
    <div className="flex items-center gap-2 px-6 ">
      <ProjectLike projectLikes={projectLikes} />
      <Comment />
    </div>
  );
}
export default Footer;
