
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-between h-96">
        <div className="font-bold text-5xl w-1/2 flex justify-center items-center p-8">
          <div className="text-black text-center rounded-full bg-slate-100 h-96 w-96 flex items-center justify-center shadow-2xl shadow-slate-200">
            Velammal Institute of Technology
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center text-center p-8">
          <div className="text-white font-serif text-2xl p-4 text-justify">
            Velammal Institute of Technology aims at excellence in research and
            is fully committed to developing and promoting research activity.
            Research, both pure and applied, being an essential academic
            activity is an integral part of the Velammal’s mission. Research and
            advancement of knowledge as intellectual activities, are an integral
            part of our educational environment that fosters innovation and
            enthusiasm for excellence.
          </div>
        </div>
      </div>
      <div className="flex justify-between h-80">
      <div className="w-1/2 flex justify-center items-center text-center p-8">
        <div className="text-white font-serif text-2xl p-4 text-justify">
        NEURONEX - Towards Advance Level of Science is a symposium of annual occurrence conducted by the department of Artificial Intelligence and Data Science to showcase the importance of their domain. A wave of fun and technical skill test will be conducted throughout the day.
        </div>
      </div>
      <div className="font-bold text-5xl w-1/2 flex justify-center items-center p-8">
            <img src="./logo.png" alt="Neuronex" />
        </div>
      </div>
    </>
  );
};

export default About;
