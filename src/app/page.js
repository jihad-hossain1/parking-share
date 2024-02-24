import React from "react";
import Robin from "./robin/page";
import Banner from "./banner/page";
import Slogan from "./slogan/page";
import PropertyType from "./propertyType/page";
import Sponsors from "@/components/Sponsors/Sponsors";
import Testemonial from "@/components/Testemonial/Testemonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Slogan />
      <PropertyType />
      <Sponsors/>
      <Testemonial/>
      {/* <Robin /> */}
    </>);
};

export default HomePage;
