import React from "react";
import Image from "next/image";
import hero_img from "/images/hero.png";
import { MdArrowForwardIos } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Cards from "./Cards";

export default function Hero() {
  return (
    <section
      id="bg"
      className="px-4 md:px-8 lg:px-16 xl:px-40 flex flex-col space-y-5 h-[70vh] xl:h-[75vh]"
    >
      <div className="relative z-0 mt-10 xl:mt-20 flex flex-col  h-full">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 lg:mb-5 text-white xl:text-7xl">
            Getting you where <br /> you want to study
            <span className="text-[#03989e]">.</span>
          </h2>
          <p className=" text-slate-100 md:w-[60%] lg:w-1/2 xl:text-lg ">
            Bringing you everything you need to make your next school
            application a breeze.
          </p>
        </div>
        <div className="flex mb-10">
          <button className="border mt-5 lg:px-4 lg:py-2 lg:text-xl px-5 py-2 text-slate-100 font-bold">
            Learn More
          </button>
        </div>
        <form className="mt-20 bg-[#03989e] md:w-1/2" action="">
          <div className="flex items-center">
            <div className=" p-3 xl:p-5 flex items-center h-full flex-1 bg-white">
              <p className="text-2xl">
                <FiSearch />
              </p>
              <input className="pl-3 xl:text-lg w-full focus:outline-none" type="text" placeholder="Search for courses"/>
            </div>
            <p className="text-2xl  text-white px-3 xl:px-5">
              <MdArrowForwardIos />
            </p>
          </div>
        </form>
        <div className="xl absolute w-full flex justify-center -bottom-20">
          <Cards/>
        </div>
      </div>
    </section>
  );
}
