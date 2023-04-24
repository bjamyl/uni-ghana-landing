import React from "react";
import Image from "next/image";
import hero_img from "/images/hero.png";

export default function Hero() {
  return (
    <section
      id="bg"
      className="mx-4 xl:mx-40 flex flex-col space-y-5 h-[40vh] lg:h-[60vh] rounded-lg"
    >
      <div className="m-2 lg:m-10 flex flex-col justify-between h-full">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-white lg:text-5xl">
            Getting you where you want to study
          </h2>
          <p className="text-center text-slate-100 md:w-[60%] lg:w-1/2 lg:text-xl">
            Everything you need to make your next school application a breeze.
            All the information you need in one place and with quality guidance
            too!
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <button className="border mt-5 lg:px-4 lg:py-2 lg:text-xl px-2 py-1 text-slate-100 font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
