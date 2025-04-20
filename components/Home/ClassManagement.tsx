import Image from "next/image";
import React from "react";

const ClassManagement = () => {
  return (
    <div className="w-full py-20 px-6 lg:px-20  flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Side */}
      <div className="max-w-xl text-left lg:text-left items-center flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-blue-900 relative">
          <span className="inline-block relative z-10">
            <span className="text-orange-400">Class Management </span>
            Tools for Educators
          </span>
        </h2>
        <div>
          <p className="text-gray-600 mt-6 text-justify leading-relaxed">
          Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="mx-auto xl:block mt-10">
        <div className="relative flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/images/gradebook.svg"
            alt="Header"
            width={637}
            height={611}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassManagement;
