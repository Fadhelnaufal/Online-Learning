"use client";
import ThemeToggle from "@/components/Helper/ThemeToggle";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full ${
        navBg ? "bg-lime-100 shadow-md" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        {/* Logo */}
        <div className="text-gray-800 font-bold text-2xl sm:text-3xl">Logo</div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-800 hover:text-gray-500 duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Buttons & Burger */}
        <div className="flex items-center space-x-4">
          {/* Join Button */}
          <a
            href="#_"
            className="rounded-full px-6 py-3 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative z-20 flex items-center font-semibold">
              Join
              <FaArrowRight className="ml-2 w-4 h-4" />
            </span>
          </a>
            {/* Theme Switch Button */}
            <ThemeToggle />
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="text-gray-800 text-3xl cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
