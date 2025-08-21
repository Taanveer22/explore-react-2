import { useState } from "react";

const HookOne = () => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <div className=" text-4xl">
        <h1 className="text-3xl font-semibold text-green-800">
          exploring hooks
        </h1>
        <h1 className="text-xl font-semibold text-green-800">count: {value} </h1>
        <button onClick={handlePlus} className="btn btn-primary m-5">
          plus
        </button>
        <button onClick={handleMinus} className="btn btn-secondary m-5">
          minus
        </button>
      </div>
    </div>
  );
};

export default HookOne;
