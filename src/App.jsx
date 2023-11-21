import React, { useState } from "react";
import data from "../data";
import Question from "./components/Question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="bg-[#cffafe] h-full p-16">
      <div className="w-full sm:w-2/3 bg-white border rounded-md shadow-xl shadow-gray h-full flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-3xl sm:text-5xl text-cyan-900 mb-10">Questions</h1>
        <div className="w-full">
          {questions.map((item) => (
            <Question key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
