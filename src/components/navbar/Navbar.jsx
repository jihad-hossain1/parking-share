"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav/MobileNav";
import UserAccount from "./account/UserAccount";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <main className="bg-blue-500 text-zinc-50 py-3">
      <nav className="max-w-screen-xl m-auto flex justify-between items-center ">
        <Logo />
        <div className="items-center text-sm flex gap-4 md:gap-12 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact Us</Link>
        </div>
        <div className="relative block md:hidden">
          <ThreeDot />
        </div>
        <div className="hidden md:block">
          <UserAccount />
        </div>
      </nav>
      {/* <main className="container mx-auto sticky top-3 z-10 px-2 flex justify-center ">
        <div className="grid grid-flow-col justify-stretch items-center absolute  font-bold backdrop-blur-3xl bg-gray/30 border rounded-3xl md:py-0 lg:py-[0.1em] px-[2em] w-[80%]">
          <h1 className="text-white">Parking Share</h1>
          <MobileNav />
        </div>
      </main> */}
    </main>
  );
};

function ThreeDot() {
  const [open, setopen] = React.useState(false);
  return (
    <>
      <button onClick={() => setopen(!open)} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 right-0 bg-white text-zinc-800 w-[100px] h-screen">
          <button onClick={() => setopen(!open)}>X</button>
          <h4 className="">this is drawer</h4>
        </div>
      )}
    </>
  );
}

export default Navbar;
