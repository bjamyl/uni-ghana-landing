import { useState } from "react";
import Hamburger from "hamburger-react";
import Menu from "./Menu";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <section className="m-4 xl:mx-40 flex justify-between items-center">
        {/* Logo */}
        <h3 className="font-bold text-2xl text-[#09347d]">
          <Link href="/">
            UniGhana<span>.</span>
          </Link>
        </h3>
        {/* Page Links */}
        <ul className="hidden xl:flex xl:gap-x-6 font-bold ">
          <Link href="/">
            <li className="xl:hover:cursor-pointer">Home</li>
          </Link>
          <li className="xl:hover:cursor-pointer">Universities</li>
          <li className="xl:hover:cursor-pointer">Scholarships</li>
        </ul>
        {/* Acocunt buttons */}
        <div className="hidden xl:flex xl:items-center xl:gap-x-6 ">
          <Link href="/sign-in">
            <button>Sign In</button>
          </Link>
          <button className="bg-[#09347d] text-white py-2 px-3 rounded-full">
            Get Started
          </button>
        </div>
        <div className="xl:hidden">
          <Hamburger color="#09347d" onToggle={() => setToggle(!toggle)} />
        </div>
        {toggle ? (
          <div className="fixed top-20 left-0 w-screen ">
            <Menu />
          </div>
        ) : null}
      </section>
    </nav>
  );
}
