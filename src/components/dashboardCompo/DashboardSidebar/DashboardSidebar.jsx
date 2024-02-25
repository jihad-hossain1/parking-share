import Link from "next/link";
import React from "react";
import { IoSettings } from "react-icons/io5";
import { BsFillSignNoParkingFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const DashboardSidebar = () => {
  return (
    <main className="p-3 bg-violet-100 dark:bg-violet-950 ">
      <h4>DashboardSidebar</h4>

      <nav className="flex flex-col gap-10 mt-10">
        <Link href={"/dashboard/allparkingspot"} className="flex items-center gap-4">
          <BsFillSignNoParkingFill className="text-violet-800" size={25} />
          <span className="hover:text-violet-800 font-semibold">All Parking Spot Manage</span>
        </Link>
        <Link href={"/dashboard/allusers"} className="flex items-center gap-4">
          <FaUsers className="text-violet-800" size={25} />
          <span className="hover:text-violet-800 font-semibold">All Users Manage</span>
        </Link>
        <Link href={"/dashboard/admin"} className="flex items-center gap-4">
          <RiAdminFill className="text-violet-800" size={25} />
          <span className="hover:text-violet-800 font-semibold">Admin</span>
        </Link>
        <Link href={"/dashboard/location"} className="flex items-center gap-4">
          <IoSettings className="text-violet-800" size={25} />
          <span className="hover:text-violet-800 font-semibold">Location</span>
        </Link>
        <Link
          href={"/dashboard/parkingLot"}
          className="flex items-center gap-4"
        >
          <IoSettings className="text-violet-800" size={25} />
          <span className="hover:text-violet-800 font-semibold">
            ParkingLot
          </span>
        </Link>
      </nav>
    </main>
  );
};

export default DashboardSidebar;
