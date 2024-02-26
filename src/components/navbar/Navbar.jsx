"use client"
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitchButton } from "./themeSwitch/ThemeSwitchButton";
import UserAccount from "./account/UserAccount";
import MobileNav from "./MobileNav/MobileNav";
import { GiSplitCross } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";


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
    <main className="container mx-auto sticky top-3 z-10 px-2 flex justify-center ">
      <div className="grid grid-flow-col justify-stretch items-center absolute  font-bold backdrop-blur-3xl bg-gray/30 border rounded-3xl py-[0.1em] px-[2em] w-[80%]">
        <h1 className="text-white">Parking Share</h1>
        <div
          onClick={() => setOpenNav(!openNav)}
          className="text-2xl absolute right-8 cursor-pointer block md:hidden text-white"
        >
          {openNav ? (
            <GiSplitCross />
          ) : (
            <GiHamburgerMenu />
          )}

        </div>
        <ul
          className={`md:flex md:items-center gap-10 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] top-9 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${openNav ? "top-2 opacity-100 bg-white w-full h-auto rounded mx-auto" : "top-[-5px] md:opacity-100 opacity-0"
            }`}
        >
          {navList.map((menu, index) => (
            <li className="my-10 lg:my-0 font-bold text-black lg:text-white" key={index}>{menu}</li>
          ))}
          <ThemeSwitchButton />
          <UserAccount />
        </ul>
      </div>
    </main>

  );
};

export default Navbar;
