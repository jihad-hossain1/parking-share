import React from 'react';
import { RiHomeOfficeLine } from "react-icons/ri";
import { LuParkingCircle } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbBuildingHospital } from "react-icons/tb";
import { SlPlane } from "react-icons/sl";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbBuildingBank } from "react-icons/tb";


const propertyData = [
    { parkingAria: "OFFICE SPACE PARKING", icon: <RiHomeOfficeLine /> },
    { parkingAria: "PARKING LOTS", icon: <LuParkingCircle /> },
    { parkingAria: "SHOPPING CENTER", icon: <IoStorefrontOutline /> },
    {
        parkingAria: "HOSPITALITY", icon: <TbBuildingHospital />
    },
    {
        parkingAria: "AIRPORT CAR PARKS", icon: <SlPlane />
    },
    {
        parkingAria: "MUNICIPALITIES & COMMUNITIES", icon: <HiOutlineBuildingOffice2 />
    },
    {
        parkingAria: "RESIDENTIAL BUILDINGS", icon: <TbBuildingBank />
    }
]

const PropertyType = () => {
    return (
        <>
            <h1 className='text-4xl text-center'>SELECT THE PROPERTY TYPE</h1>
            <div className='container mx-auto flex flex-col lg:flex-row justify-around items-center gap-5'>
                {propertyData.map((property, index) => (
                    <div key={index} className='group flex flex-col text-center items-center h-52 w-52 my-10 bg-white text-black hover:bg-purple-500 rounded transition-all duration-500 ease-in-out p-5 '>
                        <span className='text-5xl bg-gray-500 group-hover:bg-white transition-all duration-500 ease-in-out rounded-full p-8  flex items-center h-3/4'>{property?.icon}</span>
                        <span className='mt-1.5 font-bold h-full'>{property?.parkingAria}</span>
                    </div>))}
            </div>
        </>
    );
};

export default PropertyType;