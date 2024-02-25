import React from "react";
import HeaderFilter from "../HeaderFilter/HeaderFilter";
import HeaderCard from "../HeaderCard/HeaderCard";
import { MdOutlinePayment } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div
        className={`bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(0,0,0,0.5)),url('/city.jpg')] dark:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/city.jpg')] bg-cover py-10`}
      >
        <div className="container w-full flex items-center justify-center flex-col min-h-[60vh]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-6xl font-bold text-center text-black dark:text-white">
              Parking Never been easier than this in Bangladesh
            </h1>
            <p className="text-center text-2xl">
              We provide best parking experience
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <HeaderFilter />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5 mx-2 md:mx-0">
        <HeaderCard
          icons={<MdOutlinePayment size={50} />}
          title={"Save Money"}
          desc={
            "Save up to 70% on our site compared to the cost of on-airport parking."
          }
        />
        <HeaderCard
          icons={<MdOutlinePayment size={50} />}
          title={"Save Money"}
          desc={
            "Save up to 70% on our site compared to the cost of on-airport parking."
          }
        />
        <HeaderCard
          icons={<MdOutlinePayment size={50} />}
          title={"Save Money"}
          desc={
            "Save up to 70% on our site compared to the cost of on-airport parking."
          }
        />
      </div>
    </div>
  );
};

export default Header;
