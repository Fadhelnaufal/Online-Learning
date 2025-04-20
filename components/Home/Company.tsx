import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <div className="w-full container mx-auto mt-[100px] mb-[80px] py-20 flex flex-col justify-center items-center text-center gap-[33px] ">
      <div className="text-gray-500  text-medium sm:text-xl px-2 pb-4 ">
        Trusted by 5,000+ Companies Worldwide
      </div>

      {/* Logos in a horizontal row */}
      <div className="flex flex-wrap justify-center items-center gap-[76px]">
        <div className="w-24 sm:w-28">
          <Image
            src="/images/google.svg"
            alt="Google Logo"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-24 sm:w-28">
          <Image
            src="/images/grab.svg"
            alt="Grab Logo"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-24 sm:w-28">
          <Image
            src="/images/netflix.svg"
            alt="Netflix Logo"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-24 sm:w-28">
          <Image
            src="/images/airbnb.svg"
            alt="Airbnb Logo"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-24 sm:w-28">
          <Image
            src="/images/amazon.svg"
            alt="Amazon Logo"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-24 sm:w-28">
          <Image
            src="/images/facebook.svg"
            alt="Facebook Logo"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
