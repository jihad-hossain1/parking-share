import Link from "next/link";
import React from "react";
import { IoSettings } from "react-icons/io5";

const DashboardSidebar = () => {
  return (
    <main className="p-3 bg-violet-100 dark:bg-violet-950 ">
      <h4>DashboardSidebar</h4>

      <nav className="flex flex-col gap-10 mt-10">
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
