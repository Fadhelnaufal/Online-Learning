import Image from "next/image";
import React from "react";

const Integrations = () => {
  return (
    <div className="w-full px-6 py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Logo grid */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-md">
          <div className="flex justify-center">
            <Image
              src="/images/onedrive.svg"
              alt="OneDrive"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/toolbox.svg"
              alt="Dropbox"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/gdrive.svg"
              alt="Google Drive"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/mcteam.svg"
              alt="Microsoft Teams"
              width={120}
              height={120}
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="uppercase text-sm tracking-widest text-blue-700 mb-3">
            Integrations
          </p>
          <h2 className="text-3xl font-bold text-blue-900 leading-snug mb-5">
            200+ educational tools and platform{" "}
            <span className="text-orange-500">integrations</span>
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>
          <a
            href="#_"
            className="w-fit inline-flex items-center justify-center rounded-full px-6 py-3 sm:px-8 sm:py-3 overflow-hidden group border border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-orange-500 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 text-sm sm:text-base font-medium relative"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative z-10">Join for free</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
