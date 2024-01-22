import React from "react";
import Department from "./Department";

const About = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="text-black text-center font-bold text-5xl rounded-full bg-slate-100 h-96 w-96 flex items-center justify-center shadow-2xl shadow-slate-200">
          Velammal Institute of Technology
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-center text-center p-8 lg:pl-8">
        <div className="text-white font-serif text-2xl p-4 text-center">
          Velammal Institute of Technology aims at excellence in research and
          is fully committed to developing and promoting research activity.
          Research, both pure and applied, being an essential academic
          activity is an integral part of the Velammal’s mission. Research and
          advancement of knowledge as intellectual activities are an integral
          part of our educational environment that fosters innovation and
          enthusiasm for excellence.
        </div>
      </div>
    </div>
    <Department/>
    </>
  );
};

export default About;
