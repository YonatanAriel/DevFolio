import Image from "next/image";

function Background() {
  return (
    <div
      style={{ zIndex: -1 }}
      className="w-full h-[100vh] absolute top-0 left-0  "
    >
      <Image
        src={"/fire-bg.jpg"}
        alt="fire background"
        quality={1}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 920px) 50vw, 50vw"
        className="object-cover object-center "
      />
    </div>
  );
}
export default Background;
