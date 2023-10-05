import Link from "next/link";

export default function NotFound() {
  return (
    <div className="backdrop-blur-md p-4 text-center w-full h-full flex flex-col gap-5 text-2xl font-bold justify-center items-center  z-10 fixed inset-0">
      <h1 className="text-4xl pb-5">Not Found</h1>
      <p>Sorry, we couldn't find what you were looking for</p>
      <div className="flex gap-1">
        <span>Return</span>
        <Link className="text-[#FF4E00]" href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
