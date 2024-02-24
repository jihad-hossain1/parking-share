import Link from "next/link";
import React from "react";
import { ThemeSwitchButton } from "./themeSwitch/ThemeSwitchButton";

const Navbar = () => {
  return (
 <div className='shadow-sm sticky top-0 backdrop-blur-md'>
     <div className="container mx-auto py-2 shadow-sm sticky top-0 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div>Parking Share</div>
        <div className="flex items-center gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Become Client</Link>
        </div>
        <div>
          <ThemeSwitchButton />
        </div>
      </div>
    </div>
 </div>
  );
};

export default Navbar;
