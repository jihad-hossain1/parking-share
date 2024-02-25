import React from "react";
// import Robin from "./robin/page";
import Banner from "./banner/page";
import Slogan from "./slogan/page";
import PropertyType from "./propertyType/page";
import Sponsors from "@/components/Sponsors/Sponsors";
import Testemonial from "@/components/Testemonial/Testemonial";
import AllDivisions from "./divisions/AllDivisions";
import ContactUs from "@/components/homeComponents/ContactUs/ContactUs";
// import TeamComponent from '../components/homeComponents/TeamComponent/TeamComponent';


const HomePage = () => {
  return (
    <>
      <Banner />
      <Slogan />
      <PropertyType />
      <Sponsors/>
      <Testemonial/>
      <AllDivisions />
      {/* <TeamComponent/> */}
      <ContactUs/>
      {/* <Robin /> */}
    </>);
};

export default HomePage;
