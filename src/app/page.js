import React from "react";
// import Robin from "./robin/page";
import Banner from "./banner/page";
import Slogan from "./slogan/page";
import PropertyType from "./propertyType/page";
import AllDivisions from "./divisions/AllDivisions";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Slogan />
      <PropertyType />
      <AllDivisions />
    </>
  );
};

export default HomePage;
