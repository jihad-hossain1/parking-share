import React from "react";
import Robin from "./robin/page";
import Banner from "./banner/page";
import Slogan from "./slogan/page";
import PropertyType from "./propertyType/page";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Slogan />
      <PropertyType />
      {/* <Robin /> */}
    </>);
};

export default HomePage;
