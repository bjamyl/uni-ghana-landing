import React from "react";
import Hamburger from "hamburger-react";

export default function Navbar() {
  return (
    <nav>
      <section className="m-4 flex justify-between items-center">
        {/* Logo */}
        <h3 className="font-bold text-2xl">UniGhana<span>.</span></h3>
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
        <Hamburger />
      </section>
    </nav>
  );
}
