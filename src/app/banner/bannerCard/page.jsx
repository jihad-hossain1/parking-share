import React from 'react';
import img1 from "@/../public/bannerImage/car-park.png"
import img2 from "@/../public/bannerImage/charging-station.png"
import img3 from "@/../public/bannerImage/coming-soon.png"

// import { BsFuelPump } from "react-icons/bs";
// import { IoCarOutline } from "react-icons/io5";
// import { MdOutlineRocketLaunch } from "react-icons/md";


import Image from 'next/image';

const bannerData = [
    { title: "CAR PARK MANAGEMENT", sub: "Find out more", img: img1 },

    { title: "CHARGING STATIONS CONTROL", sub: "Find out more", img: img2 },

    { title: "COMING SOON", sub: "Find out more", img: img3 }

]

const BannerCard = () => {
    return (
        <div className='mt-20 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 '>

            {bannerData.map((content, index) => (<div key={index} className='flex flow-row lg:flex-col justify-around lg:justify-center items-center gap-5 '>
                <Image className='p-5 w-32 md:w-48 lg:w-56 h-auto md:h-48 lg:h-56 rounded-lg bg-white cursor-pointer' src={content.img} alt='images' />

                <div className='flex flex-col text-left lg:text-center'>
                    <h1 className='text-2xl font-bold'>{content?.title}</h1>
                    <span>{content?.sub}</span>
                </div>
            </div>))}
        </div>
    );
};

export default BannerCard;