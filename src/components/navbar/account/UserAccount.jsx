"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserAccount = () => {
  const { status } = useSession();
  return (
    <div className="lg:block hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <PiUserCircleLight className="text-[20px] text-white mt-2 lg:text-[32px]" />
        </DropdownMenuTrigger>
        <div className="bg-white text-blue font-bold">
          <DropdownMenuContent align="end">
            {status === "authenticated" ? (
              <>
                <DropdownMenuItem>
                  <Link className="text-white" href={"/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                 <p className="text-white"> Logout</p>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem>
                  <a className="text-white" href="/login">Login</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a className="text-white"  href="/login/register">Register</a>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default UserAccount;
