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

        <DropdownMenuContent align="end">
          {status === "authenticated" ? (
            <div className="bg-zinc-100 rounded-md shadow flex flex-col gap-2 items-end py-1">
              <DropdownMenuItem>
                <a href="#">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={"/dashboard"}>Dashboard</a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </div>
          ) : (
            <div className="bg-zinc-100 rounded-md shadow flex flex-col gap-2 items-end py-1">
              <DropdownMenuItem>
                <a href="/login">Login</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/login/register">Register</a>
              </DropdownMenuItem>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAccount;
