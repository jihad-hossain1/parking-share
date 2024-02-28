import React from 'react';
import { IoWalletOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";


const sloganData = [
    { title: "Save Money", description: "Save up to 70% on our site compared to the cost of on-airport parking.", icon: <IoWalletOutline /> },
    { title: "Save Time", description: "It’s easy to compare parking at all major airports. Booking a reservation is quick & simple!", icon: <BsClockHistory /> },
    { title: "Save Stress", description: "Guarantee your parking spot by booking in advance. Can’t make it? Cancellations are free.", icon: <FaRegThumbsUp /> },
]
const Slogan = () => {
    return (
        <div className='container mx-auto my-10 flex flex-col lg:flex-row gap-5'>
            {sloganData.map((data, index) => (
                <div key={index} className='flex justify-center px-2 items-center gap-5 h-48 w-full rounded hover:bg-blue-500 shadow-lg transition-all duration-500 ease-in-out cursor-pointer group'>
                    <div className='text-5xl group-hover:text-white mx-5'>{data?.icon}</div>
                    <div className='flex flex-col group-hover:text-white'>
                        <span className='text-2xl font-bold '>{data?.title}</span>
                        <span>{data?.description}</span>
                    </div>

                </div>))}
        </div>
    );
};

export default Slogan;