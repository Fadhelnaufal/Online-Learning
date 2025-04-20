import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col bg-lime-100">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
            <span className="text-orange-400">Studying</span> Online is Now Much
            Easier
          </h1>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quia, quod quas quae quidem quibusdam
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Join Button */}
            <a
              href="#_"
              className="w-fit inline-flex items-center justify-center rounded-full px-6 py-3 sm:px-8 sm:py-3  overflow-hidden group bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 text-sm sm:text-base font-medium"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative z-10">Join for free</span>
            </a>

            {/* Play Button with Text */}
            <div className="flex items-center space-x-3">
              <a
                href="#_"
                className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden group bg-white relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
              >
                <FaPlay className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <p className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
                Watch how it works
              </p>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="mx-auto hidden xl:block mt-20 ">
          <Image
            src="/images/header-pic.png"
            alt="Header"
            width={911}
            height={911}
          />
        </div>
      </div>

      {/* Bottom Shape Divider */}
      <div className="absolute bottom-0 w-full">
        <svg
          className="w-full h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
