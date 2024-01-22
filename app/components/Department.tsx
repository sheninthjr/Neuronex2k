import React from "react";
import Technical from "./Technical";

const Department = () => {
  return (
    <>
      <div>
        <div className="lg:w-full flex flex-col lg:flex-row justify-between h-96">
          <div className="lg:w-1/2 flex justify-center items-center text-center p-8">
            <div className="text-white font-serif text-2xl p-4 text-center">
              NEURONEX - Towards Advance Level of Science is a symposium of
              annual occurrence conducted by the department of Artificial
              Intelligence and Data Science to showcase the importance of their
              domain. A wave of fun and technical skill tests will be conducted
              throughout the day.
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img src="./logo.png" alt="Neuronex" />
          </div>
        </div>
      </div>
      <Technical/>
    </>
  );
};

export default Department;
