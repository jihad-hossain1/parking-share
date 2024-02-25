'use client'

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

const HeaderFilter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form action="" className="flex items-center justify-center divide-x w-1/2" onSubmit={handleSubmit(onSubmit)}>
      <Select {...register("carCategory")} >
        <SelectTrigger className="  bg-white text-black rounded-none border-none">
          <SelectValue placeholder="Car Category" />
        </SelectTrigger>
        <SelectContent className={cn("outline-none bg-white text-black")}>
          <SelectItem value="Car">Car</SelectItem>
          <SelectItem value="Truck">Truck</SelectItem>
          <SelectItem value="Bus">Bus</SelectItem>
        </SelectContent>
      </Select>

      <Select {...register("city")}>
        <SelectTrigger className="  bg-white text-black rounded-none border-none">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent className={cn("outline-none bg-white text-black")}>
          <SelectItem value="Dhaka">Dhaka</SelectItem>
          <SelectItem value="Chittagong">Chittagong</SelectItem>
          <SelectItem value="Rajshahi">Rajshahi</SelectItem>
        </SelectContent>
      </Select>
      {/*<button className="bg-white text-black py-2 px-4">search</button>*/}
      <input type="submit" className="bg-white text-black py-2 px-4" />
    </form>
  );
};

export default HeaderFilter;
