import React from 'react';
import { RiHomeOfficeLine } from "react-icons/ri";
import { LuParkingCircle } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbBuildingHospital } from "react-icons/tb";
import { SlPlane } from "react-icons/sl";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbBuildingBank } from "react-icons/tb";

const propertyData = [
    { parkingAria: "OFFICE SPACE PARKING", icon: <RiHomeOfficeLine size={80} /> },
    { parkingAria: "PARKING LOTS", icon: <LuParkingCircle size={80} /> },
    { parkingAria: "SHOPPING CENTER", icon: <IoStorefrontOutline size={80} /> },
    { parkingAria: "HOSPITALITY", icon: <TbBuildingHospital size={80} /> },
    { parkingAria: "AIRPORT CAR PARKS", icon: <SlPlane size={80} /> },
    { parkingAria: "MUNICIPALITIES ", icon: <HiOutlineBuildingOffice2 size={80} /> },
    { parkingAria: "RESIDENTIAL BUILDINGS", icon: <TbBuildingBank size={80} /> },
    { parkingAria: "RESIDENTIAL BUILDINGS", icon: <TbBuildingBank size={80} /> }
];

const PropertyType = () => {
    return (
        <>
            <h1 className='text-4xl text-center mt-[8%] mb-10'>SELECT THE PROPERTY TYPE</h1>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6'>
                {propertyData.map((property, index) => (
                    <div key={index} className='group cursor-pointer flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200'>
                        <span className='text-4xl bg-blue-500 text-white rounded-full p-4 mb-4 group-hover:bg-white group-hover:text-blue-500'>{property?.icon}</span>
                        <span className='font-semibold text-lg text-gray-800 group-hover:text-blue-500'>{property?.parkingAria}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PropertyType;
