"use client";
import Link from "next/link";
import React from "react";
import { FaCode, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
    <header className="sticky top-0 p-5">
      <div className="flex flex-col px-4 py-6">
        <div className="pl-6 flex flex-row ">
          <FaCode size={26} className="text-teal-600 " />
          <h1 className="pl-4 text-lg">FaotuHappy</h1>
          <div className="">
            {" "}
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
            <div className="flex items-start justify-right text-right px-4 gap-5">
              <Link href="https://www.twitter.com/FaotuHappy/">
                <FaSquareXTwitter
                  size={26}
                  className="hover:text-xl hover:text-teal-500"
                />
              </Link>

              <Link href="https://www.linkedin.com/in/faotuhappy/">
                <FaLinkedin
                  size={26}
                  className="hover:text-xl hover:text-teal-500"
                />
              </Link>
              <Link href="https://github.com/Faotu">
                <FaGithubSquare
                  size={26}
                  className="hover:text-xl hover:text-teal-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
