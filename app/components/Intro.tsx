import React from "react";
import About from "./About";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col space-y-28 justify-center items-center">
        <div className="animate-pulse motion-reduce:transition-none motion-reduce:hover:transform-none mt-56 text-4xl md:text-6xl lg:text-8xl font-extrabold">
          NeuroNex2k&apos;4
        </div>
        <div className="flex flex-col justify-center items-center space-y-6 text-3xl lg:text-6xl custom-animate-ping text-slate-500">
          <div className="">Coming Soon...</div>
          <div>On</div>
          <div className="text-4xl custom-animate-ping text-white">2 March 2024</div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Intro;
