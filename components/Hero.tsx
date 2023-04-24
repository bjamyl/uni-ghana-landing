import React from "react";
import Image from "next/image";
import hero_img from "/images/hero.png";

export default function Hero() {
  return (
    <section className="mx-4 flex flex-col space-y-5">
      <div>
        <h2 className="text-4xl font-bold">
          Getting you where you want to study
        </h2>
        <p className="">
          Everything you need to make your next school application a breeze. All
          the information you need in one place and with quality guidance too!
        </p>
        <button className="border mt-5 px-2 py-1">Learn More</button>
      </div>
      <Image
        src="/images/hero.png"
        width={1920}
        height={1080}
        alt="hero-image"
      />
    </section>
  );
}
