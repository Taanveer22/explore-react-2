const ArrayMap = () => {
  const names = ["sakib", "tamim", "mushfiq", "riyad", "mash"];
  return (
    <div>
      <h2 className=" text-red-800 text-3xl font-medium">array map method</h2>
      {names.map((element, index) => (
        <li className=" text-red-800 text-xl font-medium" key={index}>
          {element}
        </li>
      ))}
    </div>
  );
};

export default ArrayMap;
