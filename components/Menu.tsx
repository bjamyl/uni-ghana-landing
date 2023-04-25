import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <section className="h-screen bg-white z-100 px-4">
      <ul className="font-bold text-2xl space-y-2 text-[#09347d]">
        <Link href="/">
          <li>Home</li>
        </Link>
        <li>Universities</li>
        <li>Scholarships</li>
        <Link href="/sign-in">
          <li>Sign In</li>
        </Link>
        <li>Get Started</li>
      </ul>
    </section>
  );
}
