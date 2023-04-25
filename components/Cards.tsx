import React from "react";
import Card from "./Card";
import { MdSchool } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsFillChatTextFill, BsGraphUpArrow } from "react-icons/bs";

export default function Cards() {
  return (
    <section className="w-[75vw] xl:w-[60vw]">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
        <div className="hover:cursor-pointer hover:scale-105 transition-all duration-300 p-4 bg-[#023a7a] xl:p-10">
          <div>
            <p className="text-[#03989e] text-4xl xl:text-5xl mb-4">
              <MdSchool />
            </p>
            <p className="font-bold xl:text-lg text-white">Find your dream school</p>
          </div>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 transition-all duration-300 p-4 bg-[#023a7a] xl:p-10">
          <div>
            <p className="text-[#03989e] text-4xl xl:text-5xl mb-4">
              <FiSearch />
            </p>
            <p className="font-bold xl:text-lg text-white">Find your dream school</p>
          </div>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 transition-all duration-300 p-4 bg-[#023a7a] xl:p-10">
          <div>
            <p className="text-[#03989e] text-4xl xl:text-5xl mb-4">
              <BsFillChatTextFill />
            </p>
            <p className="font-bold xl:text-lg text-white">Find your dream school</p>
          </div>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 transition-all duration-300 p-4 bg-[#023a7a] xl:p-10">
          <div>
            <p className="text-[#03989e] text-4xl xl:text-5xl mb-4">
              <BsGraphUpArrow />
            </p>
            <p className="font-bold xl:text-lg text-white">Find your dream school</p>
          </div>
        </div>
      </div>
    </section>
  );
}
