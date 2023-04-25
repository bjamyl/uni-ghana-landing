import { useState } from "react";
import Hamburger from "hamburger-react";
import Menu from "./Menu";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" bg-[#03989e]">
      <section className="p-4 xl:mx-16 flex justify-between items-center">
        {/* Logo */}
        <h3 className="font-bold text-2xl text-[#09347d]">
          <Link href="/">
            UniGhana<span>.</span>
          </Link>
        </h3>
        {/* Page Links */}
        <div className="flex items-center gap-x-6">
          <ul className="hidden md:flex items-center md:gap-x-6 font-bold text-slate-100">
            <Link href="/">
              <li className="xl:hover:cursor-pointer">Home</li>
            </Link>
            <li className="xl:hover:cursor-pointer">Universities</li>
            <li className="xl:hover:cursor-pointer">Scholarships</li>
            <Link href="/getstarted">
              <li className="xl:hover:cursor-pointer border py-2 px-5">
                Get Started
              </li>
            </Link>
          </ul>
          {/* Acocunt buttons */}
          <div className="flex items-center">
            <div className="md:hidden">
              <Hamburger color="white" onToggle={() => setToggle(!toggle)} />
            </div>
            <p className="text-white text-3xl hover:cursor-pointer">
              <FiSearch />
            </p>
          </div>
        </div>
        {toggle ? (
          <div className="fixed z-10 top-20 left-0 w-screen ">
            <Menu />
          </div>
        ) : null}
      </section>
    </nav>
  );
}
