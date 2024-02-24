"use client"
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitchButton } from "./themeSwitch/ThemeSwitchButton";
import UserAccount from "./account/UserAccount";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navList = [
    <Link key={0} href={"/"}>
      Home
    </Link>,
    <Link key={1} href={"/"}>
      About
    </Link>,
    <Link key={2} href={"/"}>
      Become Client
    </Link>,
  ];

  return (
    <main className=" py-2 px-5 shadow-md fixed w-full bg-purple-500 rounded z-10">
      <div className="grid grid-flow-col justify-stretch items-center">
        <div>Parking Share</div>
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 cursor-pointer block md:hidden top-1`}
        >
          {open ? (
            <span role="img" aria-label="Close Menu">
              &#x2261;
            </span>
          ) : (
            <span role="img" aria-label="Open Menu">
              &#10006;
            </span>
          )}
        </div>
        <ul
          className={`md:flex md:items-center gap-10 md:pb-0 pb-12 absolute md:static bg-purple-500 md:z-auto z-[-1] top-9 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-2 opacity-100" : "top-[-5px] md:opacity-100 opacity-0"
          }`}
        >
          {navList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
          <ThemeSwitchButton />
          <UserAccount />
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
