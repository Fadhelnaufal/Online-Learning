import { navLinks } from "@/constant/constant";
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 z-[1002] bg-black opacity-70 w-full h-screen transform transition-all duration-300"
        ></div>
      )}

      {/* Sidebar nav */}
      <div
        className={`text-gray-800 fixed top-0 left-0 justify-center flex flex-col h-full transform transition- duration-300 delay-100 w-[80%] sm:w-[60%] bg-lime-100 space-y-6 z-[1050] ${navOpen}`}
      >
        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-gray-800 cursor-pointer"
        />

        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-gray-800 w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-gray-800 sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
