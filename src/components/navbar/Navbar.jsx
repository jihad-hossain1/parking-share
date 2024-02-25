import Link from "next/link";
import React from "react";
import { ThemeSwitchButton } from "./themeSwitch/ThemeSwitchButton";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  return (
 <div className='shadow-sm sticky top-0 backdrop-blur-md'>
     <div className="container mx-auto py-2 shadow-sm sticky top-0 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div>Parking Share</div>
        <div className="lg:flex items-center gap-10 hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Become Client</Link>
        </div>
        <div className='flex items-center justify-center' >
          <ThemeSwitchButton />
          <div className='block lg:hidden' >
          <MobileNav/>
        </div>
        </div>

      </div>
    </div>
 </div>
  );
};

export default Navbar;
