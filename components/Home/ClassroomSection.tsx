import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const ClassroomSection: React.FC = () => {
  return (
    <div className="w-full py-20 px-6 lg:px-20  flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Side */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-2xl font-medium leading-snug text-blue-900 relative">
          <span className="inline-block relative z-10">
            Everything you can do in a physical classroom,{" "}
            <span className="text-orange-400">you can do with Skilline</span>
          </span>
          <span className="absolute left-0 top-2 w-4 h-4 bg-orange-300 rounded-full -z-10 translate-x-[-12px] translate-y-[-8px]"></span>
          <div className="absolute -top-3 -left-3 w-12 h-12 bg-orange-300 rounded-full z-0"></div>
        </h2>
        <div className="mt-8 items-start">
          <p className="text-gray-600 mt-6 text-base leading-relaxed text-justify">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
        </div>

        <a
          href="#"
          className="text-sm text-gray-700 underline inline-block mt-5"
        >
          Learn more
        </a>
      </div>

      {/* Right Side */}
      <div className="mx-auto xl:block mt-20">
        <div className="relative flex items-center justify-center">
          {/* Play Button */}
          <a
            href="#_"
            className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden group bg-white absolute z-10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
          >
            <FaPlay className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
          </a>

          {/* Background Image */}
          <Image
            src="/images/classroom.svg"
            alt="Header"
            width={911}
            height={911}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassroomSection;
