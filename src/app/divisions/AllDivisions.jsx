"use client";

import { GET_DIVISIONS } from "@/graphql/query/location.query";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

// const districtsData = [
//   {
//     district: "Dhaka",
//     image:
//       "https://img.freepik.com/free-vector/dhaka-bangladesh-line-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-584.jpg?w=826&t=st=1708607049~exp=1708607649~hmac=687859fe393eb577ba63216d81adbbe5d1fc44b59da3cc47e1cd4fef6426a0ed",
//     totalParkingLots: 100,
//     totalAvailableLots: 75,
//   },
//   {
//     district: "Chittagong",
//     image:
//       "https://img.freepik.com/free-vector/dhaka-bangladesh-line-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-584.jpg?w=826&t=st=1708607049~exp=1708607649~hmac=687859fe393eb577ba63216d81adbbe5d1fc44b59da3cc47e1cd4fef6426a0ed",
//     totalParkingLots: 80,
//     totalAvailableLots: 60,
//   },
// ];

const AllDivisions = () => {
  const { data, loading, error } = useQuery(GET_DIVISIONS) || {};
  return (
    <div className="container mx-auto">
      
      <p className="text-center my-[8%] lg:text-5xl md:text-5xl text-3xl font-medium lg:w-full md:w-full w-[80%] mx-auto">Bangladesh Our Parking Districts</p>
      <div className="container mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((ite, ind) => (
            <div
              key={ind}
              className="w-[300px] bg-slate-200 animate-pulse h-[300px]"
            />
          ))
        ) : error ? (
          <div>{error?.message}</div>
        ) : (
          data?.divisions?.map((district, index) => (
            <Link key={index} href={`/divisions/${district?.name}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={district?.image || ""}
                  alt={district?.name}
                  width={300}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold">{district.name}</h2>
                  <p className="text-gray-600">
                    Total Parking Lots: {district?.totalParkingLots || 34}
                  </p>
                  <p className="text-gray-600">
                    Total Available Lots: {district?.totalAvailableLots || 54}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllDivisions;
