import React from "react";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#023a7a] p-4 pt-8 md:px-8 lg:px-16 xl:px-20">
        <div className="flex  justify-between">
          {/* Logo */}
          <h3 className="font-bold text-2xl text-white">
            <Link href="/">
              UniGhana<span>.</span>
            </Link>
          </h3>
          <ul className="flex items-center justify-between gap-x-10">
            <li className="text-white text-3xl">
              <BsLinkedin />
            </li>
            <li className="text-white text-3xl">
              <BsTwitter />
            </li>
            <li className="text-white text-3xl">
              <BsFacebook />
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-white my-5"></div>
        <p className="font-bold text-white text-lg text-center">&copy; UniGhana, 2023. <br /> Built by Jamil Banamwine Alhassan</p>
      </section>
    </footer>
  );
}
