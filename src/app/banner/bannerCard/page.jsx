import React from 'react';
import img1 from "@/../public/bannerImage/carPark.svg"
import img2 from "@/../public/bannerImage/chargingStation.svg"
import img3 from "@/../public/bannerImage/comingSoon.svg"
import Image from 'next/image';

const imgArray = [
    { title: "CAR PARK MANAGEMENT", sub: "Find out more", img: img1 },
    { title: "CHARGING STATIONS CONTROL", sub: "Find out more", img: img2 },
    { title: "COMING SOON", sub: "Find out more", img: img3 }
]
console.log(imgArray);
const BannerCard = () => {
    return (
        <div className='mt-5 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20'>

            {imgArray.map((content, index) => (<div key={index} className='flex flow-row lg:flex-col justify-around lg:justify-center items-center gap-5'>
                <Image className='p-2' src={content.img} alt='images' />
                <div className='flex flex-col text-left lg:text-center'>
                    <h1 className='text-xl font-bold'>{content?.title}</h1>
                    <span>{content?.sub}</span>
                </div>
            </div>))}
        </div>
    );
};

export default BannerCard;