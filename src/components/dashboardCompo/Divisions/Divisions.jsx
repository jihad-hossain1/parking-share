"use client";

import React from "react";
import Updatedivision from "./action/index/Updatedivision";
import { useQuery } from "@apollo/client";
import { GET_DIVISIONS } from "@/graphql/query/location.query";
import Image from "next/image";

const Divisions = () => {
  const { data, loading, error } = useQuery(GET_DIVISIONS) || {};
  console.log(data);
  return (
    <div>
      <h4>Totol Division {data?.divisions?.length || 0}</h4>
      <div className="flex flex-col gap-3">
        {loading ? (
          <div> Loading....</div>
        ) : error ? (
          <div>{error?.message}</div>
        ) : (
          data?.divisions?.map((division, index) => (
            <div key={division?.id} className="group relative flex gap-2">
              <h4 className="">
                <span>{index + 1}</span> {division?.name}
              </h4>
              <p>{division?.about || "no data here."}</p>
              <Image
                src={
                  division?.image || "https://i.ibb.co/XjLJbLn/Rectangle-1.png"
                }
                alt="division iamge"
                width={300}
                height={200}
              />
              <Updatedivision division={division} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Divisions;
