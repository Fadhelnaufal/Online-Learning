import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Assesment = () => {
  return (
    <div className='w-full py-20 px-6 lg:px-20  mt-10 '>

    <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-8 ">
            {/* left Column - Image with Play Button */}
            <div className="flex-1 flex items-center justify-center relative ">
              <a
                href="#_"
                className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden group bg-white absolute z-10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
              >
                <FaPlay className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </a>
         
              <Image
                src="/images/true.svg"
                alt="Header"
                width={617}
                height={651}
                className="z-0"
              />
            </div>
    
            {/* right Column */}
            <div className="flex-1 text-center lg:text-left max-w-xl">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold leading-snug text-blue-900 relative text-justify">
                <span className="relative z-10">
                 Assesment,  <span className="text-orange-400">Quizzes, </span> Tests
                </span>
              </h3>
    
              {/* Description */}
              <div className="mt-8 space-y-6 text-left">
                  <p className="text-gray-700 text-justify">
                  Easily launch live assignments, quizzes, and tests.
                  Student results are automatically entered in the online gradebook.
                  </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Assesment