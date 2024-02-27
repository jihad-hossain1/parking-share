import Banner from "./banner/page";
import Slogan from "./slogan/page";
import PropertyType from "./propertyType/page";
import Sponsors from "@/components/Sponsors/Sponsors";
import Testemonial from "@/components/Testemonial/Testemonial";
import AllDivisions from "./divisions/AllDivisions";
import OurTeam from "@/components/homeComponents/OurTeam/OurTeam";
import ContactUs from "./contactUs/page";

const HomePage = () => {
      return (
            <>
                  <Banner />
                  <Slogan />
                  <PropertyType />
                  <Sponsors />
                  <Testemonial />
                  <AllDivisions />
                  <OurTeam />
                  <ContactUs />
            </>);
};

export default HomePage;
