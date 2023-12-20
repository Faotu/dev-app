"use client";
import Link from "next/link";
import React from "react";
import { FaCode, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const activeRoute = [
  {
    label: "Home",
    href: "/",
    id: 1,
  },

  {
    label: "Blogs",
    href: "/blogpost",
    id: 2,
  },
];

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className="sticky top-0 p-5 flex  max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="flex flex-col px-4 py-6">
          <div className="pl-6 flex flex-row ">
            <FaCode size={26} className="text-teal-600 " />
            <h1 className="pl-4 text-lg">FaotuHappy</h1>
            <div className="flex flex-row justify-items-end  px-8 gap-4 pl-60 ">
              {activeRoute.map((item) => (
                <div
                  className="hover:text-teal-500 hover:text-xl cursor-pointer transition"
                  key={item.id}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="flex justify-around">
              <div className="flex items-start justify-right text-right px-4 gap-5">
                <Link href="https://www.twitter.com/FaotuHappy/">
                  <div className="flex flex-row">
                    <FaSquareXTwitter
                      size={26}
                      className="hover:text-xl hover:text-teal-500"
                    />
                    <h1>Twitter (X)</h1>
                  </div>
                </Link>

                <Link href="https://www.linkedin.com/in/faotuhappy/">
                  <div className="flex flex-row">
                    <FaLinkedin
                      size={26}
                      className="hover:text-xl hover:text-teal-500"
                    />
                    <h1>LinkedIn</h1>
                  </div>
                </Link>
                <Link href="https://github.com/Faotu">
                  <div className="flex flex-row">
                    <FaGithubSquare
                      size={26}
                      className="hover:text-xl hover:text-teal-500"
                    />{" "}
                    <h1>GitHub</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
