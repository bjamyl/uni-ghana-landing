import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function Getstarted() {
  return (
    <Layout>
      <section className="grid grid-cols-1 h-screen xl:grid-cols-2">
        <div className="relative">
          <Image
            src="/images/signin.jpg"
            height={1920}
            width={1080}
            alt="signin-img"
            className=" object-cover h-full"
          />
          <p className=" flex items-center gap-2 font-bold absolute bottom-4 right-4 text-2xl text-white">
            SIGN IN
            <MdArrowForwardIos />
          </p>
        </div>
        <div className="relative">
          <Image
            src="/images/signup.jpg"
            height={1920}
            width={1080}
            alt="signup-img"
            className=" object-cover h-full"
          />
          <p className=" flex items-center gap-2 font-bold absolute bottom-4 right-4 text-2xl text-[#023a7a]">
            SIGN UP
            <MdArrowForwardIos />
          </p>
        </div>
      </section>
    </Layout>
  );
}
