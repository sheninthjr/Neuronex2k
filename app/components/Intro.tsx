import React from "react";
import About from "./About";
import Technical from "./Technical";
import NonTechnical from "./NonTechnical";
import Location from "./Location";
import Footer from "./Footer";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col space-y-28 justify-center items-center">
        <div className="animate-pulse motion-reduce:transition-none motion-reduce:hover:transform-none mt-56 text-9xl font-extrabold">
          NeuroNex2k'4
        </div>
        <div className="flex flex-col justify-center items-center space-y-6 text-6xl custom-animate-ping text-slate-500">
          <div className="">Coming Soon...</div>
          <div>On</div>
          <div className="text-4xl custom-animate-ping text-white">2 March 2024</div>
        </div>
        <About />
        <Technical/>
        <NonTechnical/>
        <Location/>
        <Footer/>
      </div>
    </>
  );
};

export default Intro;
