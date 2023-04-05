import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsTelephone } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="bg-black/20 h-[96px] backdrop-blur-2xl rounded-full min-w-[360px] max-w-[460px] mx-auto px-5 flex items-center justify-between text-white/50 text-2xl">
          <Link
            to="welcome"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsTelephone />
          </Link>
        </div>
      </div>
    </nav>
  );
}
