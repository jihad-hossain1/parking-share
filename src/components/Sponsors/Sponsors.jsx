"use client";

import Image from "next/image";

function Sponsors() {
  return (
    <div className="max-w-screen-xl mx-auto text-center my-28">
      <h1 className="text-4xl">
        <span className="text-[#19A7CE]">OUR</span> PARTNERS
      </h1>
      <p className="font-medium text-[#73767c] mt-5 lg:mx-0 md:mx-0 mx-10">
        We are proud to work with exceptional partners and deliver
        groundbreaking solutions to collectively shape a more promising future.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-8 mt-16 mx-10">
        {
            Partners.map((partner, index) =>(
                <div key={index}>
                    <Image
                    src={partner.image}
                    alt={partner.name}
                    className="mx-auto bg-no-repeat lg:h-[100px] md:h-[100px] h-[55px] lg:w-[210px] md:w-[210px] w-[110px]"
                    width={200}
                    height={200}
                  />
                  <p className="mt-2 font-medium text-[#7e7a7a]">{partner.name}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Sponsors;

const Partners = [
    {
        image: "https://i.ibb.co/TkpHnsk/Frame-457-png.webp",
        name: "SwissProp Tech",
    },
    {
        image: "https://i.ibb.co/17YmfgW/Frame-452-png.webp",
        name: "OVHCloud",
    },
    {
        image: "https://i.ibb.co/G7jtX7R/Frame-458-png.webp",
        name: "Interparking",
    },
    {
        image: "https://i.ibb.co/GWH1kYx/Frame-454-png.webp",
        name: "University of Zurich",
    },
    {
        image: "https://i.ibb.co/mJWf8nb/Frame-456-png.webp",
        name: "Innosuisse",
    },
    {
        image: "https://i.ibb.co/3Yp6pGP/Frame-453-png.webp",
        name: "PSPA/AVERE",
    },
    {
        image: "https://i.ibb.co/jkpZ1M4/Frame-461-png.webp",
        name: "Google",
    },
    {
        image: "https://i.ibb.co/QmPTD10/28368232-christmas-2012-new-6734.jpg",
        name: "The Egal",
    },
]

