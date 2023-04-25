import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <section className="h-screen md:hidden bg-white z-100 pt-10 px-4">
      <ul className="font-bold text-2xl flex flex-col gap-y-10 text-[#09347d]">
        <Link href="/">
          <li>Home</li>
        </Link>
        <li>Universities</li>
        <li>Scholarships</li>
        <Link href="/getstarted">
          <li className="">Get Started</li>
        </Link>
      </ul>
    </section>
  );
}
