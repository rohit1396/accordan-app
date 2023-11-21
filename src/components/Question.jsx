import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-6 border border-1 border-gray-200 rounded mx-8 my-5 flex flex-col shadow-md">
      <div className="text-cyan-900 flex justify-between items-center text-xl sm:text-2xl">
        <p>{title}</p>
        {
          <button
            onClick={() => setShow(!show)}
            className="bg-cyan-500 text-sm text-white px-3 py-2 border rounded-md shadow-lg bg-blue shadow-blue-50/500"
          >
            {show ? "Hide" : "Show"}
          </button>
        }
      </div>
      <p className="pt-3  text-base sm:text-lg">{show && info}</p>
    </div>
  );
};

export default Question;
