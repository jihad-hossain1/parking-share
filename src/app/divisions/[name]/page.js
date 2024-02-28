"use client";

import { GET_DIVISION } from "@/graphql/query/location.query";
import { useQuery } from "@apollo/client";
import "../divisions.css";
import Image from "next/image";

const District = ({ params }) => {
  const { data, loading, error } = useQuery(GET_DIVISION, {
    variables: { name: params?.name },
  });

  if (loading) {
    return (
      <div className="mx-auto w-[100px] lg:pt-[20%] md:pt-[20%] pt-[100%]  lg:mb-[50%] md:mb-[50%] mb-[100%]">
        <div class="hourglassBackground mx-auto">
          <div class="hourglassContainer">
            <div class="hourglassCurves"></div>
            <div class="hourglassCapTop"></div>
            <div class="hourglassGlassTop"></div>
            <div class="hourglassSand"></div>
            <div class="hourglassSandStream"></div>
            <div class="hourglassCapBottom"></div>
            <div class="hourglassGlass"></div>
          </div>
        </div>
      </div>
    );
  }
  console.log(data.division.districts);

  return (
    <div className="w-full min-h-screen">
      <div className="relative ">
        <Image
          src={data.division.image}
          alt={data.division.name}
          width={4000}
          height={300}
          className="w-full h-[480px] object-cover"
        ></Image>
        <div className="absolute text-center top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
          <p
            to="/"
            className="absolute top-16 left-4 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full"
          >
            Home {" > "}
            <span className="text-gray-400">{data.division.name}</span>
          </p>

          <h1 className="text-4xl mt-10 mb-2 w-[60%]">
            {data.division.name}
          </h1>
          <p className="text-base sm:text-lg w-[60%]">{data.division.about}</p>
        </div>
      </div>
      <div>
        <h1 className="text-center lg:text-5xl md:text-5xl text-4xl mt-24">Relative Districts</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 mx-[10%] gap-5 mb-24 mt-10">
          {data.division.districts.map((district, indx) => (
            <div key={indx} className="mx-auto p-5 rounded-lg shadow-lg">
              <Image
                src={
                  district?.image ||
                  "https://res.cloudinary.com/dqfi9zw3e/image/upload/v1708855112/images_preset/eqppcggm4mwf5avse2ip.jpg"
                }
                alt={district.name}
                width={300}
                height={300}
                className="rounded-md"
              ></Image>
              <div className="flex">
                <div className="mt-5">
                  <p className="text-lg">{district.bn_name}</p>
                </div>
                <div className="mt-5 ml-auto">
                  <button className="View_btn text-sm">View Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default District;
