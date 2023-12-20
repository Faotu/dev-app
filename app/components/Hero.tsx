import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosPersonAdd, IoMdLaptop } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import { FaLink, FaLocationDot, FaWarehouse } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { RxDownload } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="pl-20">
        <div className="rounded-full border-bg-white pl-2  border border-white w-10 h-70">
          <CgMenuGridO
            size={20}
            className="hover:text-teal-500 hover:text-xl cursor-pointer transition bg-text-white "
          />
          <IoIosPersonAdd
            size={20}
            className="hover:text-teal-500 hover:text-xl cursor-pointer transition mt-4"
          />

          <FaCode
            size={20}
            className="hover:text-teal-500 hover:text-xl cursor-pointer transition mt-4"
          />
          <IoMdLaptop
            size={20}
            className="hover:text-teal-500 hover:text-xl cursor-pointer transition mt-4"
          />
          <LiaSwatchbookSolid
            size={20}
            className="hover:text-teal-500 hover:text-xl cursor-pointer transition mt-4"
          />
          <CiMail
            size={20}
            className="hover:text-teal-500 hover:text-xl cursor-pointer transition mt-4"
          />
        </div>
      </div>
      <div className="pt-40 pl-20">
        <div className="">
          <Image
            src="/images/faotuhappy.jpg"
            alt="My Image Alt Text"
            width={100}
            height={100}
            className="w-20 h-20 overflow-hidden rounded-full border border-teal-600"
          />
        </div>
        <div className="flex flex-col pt-4">
          <h1>Faotu Happy</h1>
          <p className="text-neutral-300">Software Engineer</p>
        </div>
        <div>
          <div className="flex flex-row pt-3">
            <CiMail />
            <h1>faotuhappy@gmail.com</h1>
          </div>
          <div className="flex flex-row pt-3">
            <FaLocationDot />
            <h1>Lagos, Nigeria</h1>
          </div>

          <div className="flex flex-row pt-3">
            <FaWarehouse />
            <h1>Full-time / Freelancer</h1>
          </div>
          <div className="flex flex-row pt-3">
            <FaLink />
            <h1>https://github.com/Faotu</h1>
          </div>
          <div className="pt-4">
            <Button>
              <h1>Download</h1>
              <RxDownload />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Software Engineer</h1>
        </div>
      </div>

      <div>
        <div>
          <h1>Numbers</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
