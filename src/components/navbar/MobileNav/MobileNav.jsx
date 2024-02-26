import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

const MobileNav = () => {
  return (
    // <div className="absolute z-20">

    // </div>
    <DropdownMenu>
      {/* <DropdownMenuTrigger className="border-none outline-none">
      </DropdownMenuTrigger> */}
      <MdMenu size={30} className="mt-1" />
      <DropdownMenuContent className='bg-white text-black dark:bg-black shadow-xl border-none dark:text-white' >
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/"}>Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/"}>About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/"}>Become Client</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
