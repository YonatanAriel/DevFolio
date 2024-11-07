import Image from "next/image";
import Background from "./background";

function HeaderAndBackground({ img }) {
  return (
    <>
      <Background />
      <div className="w-full h-[42.5vh] absolute top-0 left-0 ">
        {img && (
          <Image
            src={img}
            alt="project image"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 920px) 50vw, 50vw"
            className="object-cover object-center "
          />
        )}
      </div>
    </>
  );
}
export default HeaderAndBackground;
