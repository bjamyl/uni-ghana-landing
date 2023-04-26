import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

export default function Search() {
  return (
    <form className="mt-20 bg-[#03989e] md:w-1/2" action="">
      <div className="flex items-center">
        <div className=" p-3 xl:p-5 flex items-center h-full flex-1 bg-white">
          <p className="text-2xl">
            <FiSearch color="black" />
          </p>
          <input
            disabled
            className="pl-3 xl:text-lg w-full focus:outline-none bg-white border-none"
            type="text"
            placeholder="Search for courses"
          />
        </div>
        <p className="text-2xl  text-white px-3 xl:px-5">
          <MdArrowForwardIos />
        </p>
      </div>
    </form>
  );
}
