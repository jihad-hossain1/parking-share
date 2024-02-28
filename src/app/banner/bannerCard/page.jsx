import React from 'react';
import img1 from "@/../public/bannerImage/car-park.png"
import img2 from "@/../public/bannerImage/charging-station.png"
import img3 from "@/../public/bannerImage/coming-soon.png"



import Image from 'next/image';

const bannerData = [
    { title: "CAR PARK MANAGEMENT", sub: "Find out more", img: img1 },

    { title: "CHARGING STATIONS CONTROL", sub: "Find out more", img: img2 },

    { title: "COMING SOON", sub: "Find out more", img: img3 }

]

const BannerCard = () => {
    return (
      <div className=" flex flex-col items-start lg:justify-center lg:items-center lg:flex-row  gap-10 lg:gap-20 ">
        {bannerData.map((content, index) => (
          <div
            key={index}
            className="flex flow-row lg:flex-col justify-around lg:justify-center items-center gap-5 "
          >
            <Image
              className="p-5 w-20  md:w-32   lg:w-36 h-20 md:h-32 lg:h-36 rounded-lg bg-white cursor-pointer"
              src={content.img}
              alt="images"
            />

            <div className="flex flex-col text-left lg:text-center">
              <h1 className="text-lg md:text-2xl font-bold">
                {content?.title}
              </h1>
              <span>{content?.sub}</span>
            </div>
          </div>
        ))}
      </div>
    );
};

export default BannerCard;