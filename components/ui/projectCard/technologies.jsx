function Technologies({ technologies }) {
  return (
    <div className="flex mt-1">
      {technologies?.map((tech, i) => (
        <div key={`${i}${tech}`} className="flex items-center ">
          <h1 className="pr-2 text-sm">{tech}</h1>
        </div>
      ))}
    </div>
  );
}
export default Technologies;
