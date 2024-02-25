"use client"
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitchButton } from "./themeSwitch/ThemeSwitchButton";
import UserAccount from "./account/UserAccount";
import { SheetDemo } from "./SheetDemo/SheetDemo";
import { Sheet, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);


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
    <main className="container mx-auto sticky top-3 z-10 px-2 flex justify-center text-white ">
      <div className="grid grid-flow-col justify-stretch items-center absolute  font-bold backdrop-blur-3xl bg-gray/30 border rounded-3xl py-[0.1em] px-[2em] w-[80%]">
        <div>Parking Share</div>
        {/* <div
          onClick={() => setOpenNav(!openNav)}
          className="text-3xl absolute right-8 cursor-pointer block md:hidden top-1"
        >
          {openNav ? (
            <span role="img" aria-label="Open Menu">
              &#10006;
            </span>
          ) : (

            <span role="img" aria-label="Close Menu">
              &#x2261;
            </span>
          )}

        </div> */}
        <SheetDemo />
        <ul
          className={`md:flex md:items-center gap-10 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] top-9 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${openNav ? "top-2 opacity-100" : "top-[-5px] md:opacity-100 opacity-0"
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
