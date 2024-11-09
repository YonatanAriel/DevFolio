function DeveloperImg({ developerImg }) {
  return developerImg ? (
    <img
      src={developerImg}
      alt="developer image"
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  ) : (
    <div
      className={` text-primary-color flex items-center justify-center font-semibold text-5xl text-center  bg-white`}
      style={{
        width: "9vh",
        height: "9vh",
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      D
    </div>
  );
}
export default DeveloperImg;
