"use client";
import React from "react";
import { FaCode } from "react-icons/fa";

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
    <div className="flex flex-col px-4 py-6">
      <div className="pl-6 flex flex-row">
        <FaCode size={26} className="text-teal-600 " />
        <h1 className="pl-4 text-lg">FaotuHappy</h1>
        <div className="flex flex-row items-center px-8 gap-4 pl-6">
          {activeRoute.map((item) => (
            <div key={item.id}>{item.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
