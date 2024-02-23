import React from 'react';
import BannerContent from './bannerContent/page';
import BannerCard from './bannerCard/page';
// import vid from '../../../public/video.webm';

const Banner = () => {
    return (
        <div className='relative'>
            <video autoPlay loop muted playsInline className="w-full h-screen absolute top-0 z-[-1] object-cover">
                <source src="https://sharep.io/wp-content/uploads/2023/03/AdobeStock_409752260.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="flex flex-col pt-[100px] lg:pt-[150px] justify-center items-center  text-center text-white">
                <BannerContent />
                <BannerCard />
            </div>
        </div>
    );
};

export default Banner;