import React from "react";
import Banner from "./banner/page";
import Slogan from "./slogan/page";
import PropertyType from "./propertyType/page";
import Sponsors from "@/components/Sponsors/Sponsors";
import Testemonial from "@/components/Testemonial/Testemonial";
import AllDivisions from "./divisions/AllDivisions";
import ContactUs from "./contactUs/page";
// import TeamComponent from '../components/homeComponents/TeamComponent/TeamComponent';

const HomePage = () => {
      return (
            <>
                  <Banner />
                  <Slogan />
                  <PropertyType />
                  <Sponsors />
                  <Testemonial />
                  <AllDivisions />
                  <ContactUs />
                  {/* <TeamComponent/> */}

            </>);
};

export default HomePage;
