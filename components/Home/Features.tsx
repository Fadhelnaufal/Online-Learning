import React from "react";
import Image from "next/image";
import {
  FaChalkboardTeacher,
  FaPlay,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full py-20 px-6 lg:px-20  mt-30 ">
      {/* Title Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
          Our <span className="text-orange-400">Features</span>
        </h2>
        <p className="mt-6 text-gray-600 text-base leading-relaxed">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      {/* Feature Content */}
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-8 ">
        {/* left Column - Image with Play Button */}
        <div className="flex-1 flex items-center justify-center relative mt-5">
          <a
            href="#_"
            className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden group bg-white absolute z-10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
          >
            <FaPlay className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
          </a>
          <div className="absolute -top-[50px] left-[140px] w-8 h-8 bg-cyan-300 rounded-full z-0"></div>
          <div className="absolute -top-8 left-[30px] w-24 h-24 bg-orange-300 rounded-full z-0"></div>
          <div className="absolute bottom-[30px] right-[300px] w-8 h-8 bg-cyan-300 rounded-full z-0"></div>
          <div className="absolute -bottom-2 right-[80px] w-48  h-48 bg-blue-800 rounded-full z-0"></div>
          <Image
            src="/images/teacher.svg"
            alt="Header"
            width={911}
            height={911}
            className="z-0"
          />
        </div>

        {/* right Column */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold leading-snug text-blue-900 relative">
            <span className="relative z-10">
              A <span className="text-orange-400">user interface</span> designed
              for the classroom.
            </span>
          </h3>

          {/* Description */}
          <ul className="mt-8 space-y-6 text-left">
            <li className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <FaChalkboardTeacher />
              </div>
              <p className="text-gray-700 text-justify">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-orange-100 text-orange-500 p-2 rounded-full">
                <FaUserFriends />
              </div>
              <p className="text-gray-700 text-justify">
                TA’s and presenters can be moved to the front of the class.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-purple-100 text-purple-500 p-2 rounded-full">
                <FaUsers />
              </div>
              <p className="text-gray-700 text-justify">
                Teachers can easily see all students and class data at one time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
