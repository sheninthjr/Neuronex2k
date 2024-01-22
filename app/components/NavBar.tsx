import React from 'react';

const NavBar = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-opacity-0 fixed w-full">
        <div className="text-white text-xl font-bold">Neuronex</div>
        <div className="hidden lg:flex space-x-4 font-mono">
          <a
            href="/home"
            className="text-white font-medium text-xl hover:white hover:text-3xl transition duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white font-medium text-xl hover:white hover:text-3xl transition duration-300 transform hover:scale-105"
          >
            About
          </a>
          <a
            href="/events"
            className="text-white font-medium text-xl hover:white hover:text-3xl transition duration-300 transform hover:scale-105"
          >
            Events
          </a>
          <a
            href="/location"
            className="text-white font-medium text-xl hover:white hover:text-3xl transition duration-300 transform hover:scale-105"
          >
            Location
          </a>
          <a
            href="/contact"
            className="text-white font-medium text-xl hover:white hover:text-3xl transition duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default NavBar;
