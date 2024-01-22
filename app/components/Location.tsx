import React from "react";
import Footer from "./Footer";

const Location = () => {
  return (
    <>
      <div className="text-4xl font-bold">Location</div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between p-8 items-center bg-slate-950 rounded-2xl">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001127.9217470235!2d77.80263424470436!3d11.591019727729163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527efa08e09967%3A0xc1b057bb21ab2483!2sVelammal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1705938474838!5m2!1sen!2sin"
            width="400"
            height="400"
            loading="lazy"
            className="flex justify-center items-center"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-8">
          <div className="text-white font-serif text-4xl p-4 text-center">
            Velammal Institute of Technology
          </div>
          <div>74VX+QP7, Kolkata Highway, Panjetty, Tamil Nadu 601204</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Location;
