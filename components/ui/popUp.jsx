export default function Popup({ text }) {
  return (
    <div className="  backdrop-blur-md  w-full h-full flex justify-center items-center  z-10 fixed inset-0">
      <div className="bg-[#FF4E00] text-black p-10 w-10/12 md:w-1/2  rounded-md text-center flex justify-center items-center">
        <h1 className="font-semibold text-xl">{text}</h1>
      </div>
    </div>
  );
}
