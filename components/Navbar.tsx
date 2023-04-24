import { useState } from "react";
import Hamburger from "hamburger-react";
import Menu from "./Menu";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <section className="m-4 xl:mx-40 flex justify-between items-center">
        {/* Logo */}
        <h3 className="font-bold text-2xl text-[#09347d]">
          UniGhana<span>.</span>
        </h3>
        {/* Page Links */}
        <ul className="hidden">
          <li>Home</li>
          <li>Univesities</li>
          <li>Scholarships</li>
        </ul>
        {/* Acocunt buttons */}
        <div className="hidden">
          <button>Sign In</button>
          <button>Get Started</button>
        </div>
        <Hamburger color="#09347d" onToggle={() => setToggle(!toggle)} />
        {toggle ? (
          <div className="fixed top-20 left-0 w-screen ">
            <Menu />
          </div>
        ) : null}
      </section>
    </nav>
  );
}
