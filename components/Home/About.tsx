import Image from "next/image";
import React from "react";

const AboutSkillineSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-20  text-center">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
        What is <span className="text-orange-400">Skilline?</span>
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-base leading-relaxed">
        Skilline is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>

      {/* Cards */}
      {/* Cards */}
      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Instructor Card */}
        <div
          className="relative w-full max-w-md h-72 rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/instructor.jpg')" }} // Replace with actual path
        >
          <div className="absolute inset-0  flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-lg font-semibold mb-3">FOR INSTRUCTORS</h3>
            <button className="border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition">
              Start a class today
            </button>
          </div>
          <Image
            src="/images/instructor.svg"
            alt="student"
            width={112}
            height={112}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Student Card */}
        <div
          className="relative w-full max-w-md h-72 rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center" // Replace with actual path
        >
          <div className="absolute inset-0 bg-[url('/images/students.svg')]  flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-lg font-semibold mb-3">FOR STUDENTS</h3>
            <button className="bg-sky-400 text-white rounded-full px-6 py-2 text-sm hover:bg-sky-500 transition">
              Enter access code
            </button>
          </div>
          {/* <Image
            src="/images/students.png"
            alt="student"
            width={80}
            height={80}
            className="w-full h-auto object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSkillineSection;
