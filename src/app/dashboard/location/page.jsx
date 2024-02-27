import Divisions from "@/components/dashboardCompo/Divisions/Divisions";
import { LocationTable } from "@/components/dashboardCompo/LocationTable/LocationTable";
// import { getDivisions } from "@/service/query/locationQuery";
import React from "react";

const Location = async () => {
  // const divisions = await getDivisions();
  // console.log(divisions);
  return (
    <div className="pt-20">
      <LocationTable />
      <Divisions />
    </div>
  );
};

export default Location;
