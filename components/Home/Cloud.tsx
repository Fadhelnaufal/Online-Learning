import React from "react";
import { FaCalendarAlt, FaFileAlt, FaUsers } from "react-icons/fa";

const Cloud = () => {
  return (
    <div>
      {/* Cloud Background */}
      <div className="w-full container mx-auto mt-[10px] mb-[80px]  flex flex-col justify-center items-center text-center gap-[33px] ">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-400">
            <span className="text-blue-900">All-In-One</span> Cloud Software.
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl text-center mx-2 text-md">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
      {/* Cloud Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-24 px-4">
        {/* Card 1 */}
        <div className="relative mb-20 max-w-sm mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white min-h-[200px] py-[30px]">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-24 w-24 bg-blue-500 rounded-full flex items-center justify-center">
                <FaFileAlt className="text-white text-4xl" />
              </div>
            </div>
            <div className="px-6 mt-16">
              <h1 className="font-medium text-[23px] text-center mb-1 text-blue-900">
                Online Billing, Invoicing, & Contracts
              </h1>
              <p className="text-center text-gray-500 text-base pt-3 font-normal">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative mb-16 max-w-sm mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white min-h-[280px] py-[30px]">
            <div className="absolute -mt-20 w-full justify-center flex items-center">
              <div className="h-24 w-24 bg-green-500 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-white text-4xl" />
              </div>
            </div>
            <div className="px-6 mt-16">
              <h1 className="font-medium text-[23px] text-center mb-1 text-blue-900">
                Schedule Management
              </h1>
              <p className="text-center text-gray-500 text-base pt-3 font-normal">
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative mb-16 max-w-sm mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white min-h-[280px] py-[30px]">
            <div className="absolute -mt-20 w-full flex justify-center items-center">
              <div className="h-24 w-24 bg-purple-500 rounded-full items-center justify-center flex ">
                <FaUsers className="text-white text-4xl" />
              </div>
            </div>
            <div className="px-6 mt-16">
              <h1 className="font-medium text-[23px] text-center mb-1 text-blue-900">
                Collaborative Tools
              </h1>
              <p className="text-center text-gray-500 text-base pt-3 font-normal">
                Work together seamlessly with tools built for collaboration —
                file sharing, chat, and task management.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cloud;
