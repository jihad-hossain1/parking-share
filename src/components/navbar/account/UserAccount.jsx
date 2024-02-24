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
          <PiUserCircleLight className="text-[20px] mt-2 lg:text-[32px]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {status === "authenticated" ? (
            <>
              <DropdownMenuItem>
                <Link href={"/dashboard"}>Dashboard</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <a href="/login">Login</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/login/register">Register</a>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAccount;
