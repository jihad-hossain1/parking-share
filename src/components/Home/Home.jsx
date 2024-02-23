import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {cn} from "@/lib/utils";

const Home = () => {
  return (
    <div
      className={`bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(0,0,0,0.5)),url('/city.jpg')] dark:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/city.jpg')] bg-cover py-10`}
    >
      <div className="container w-full flex items-center justify-center flex-col min-h-[60vh]">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-6xl font-bold text-center text-black dark:text-white">
            Parking Never been easier than this in Bangladesh
          </h1>
          <p className="text-center text-2xl">
            We provide best parking experience
          </p>
        </div>
        <div className='flex items-center justify-center w-full'>
          <form action="" className='flex items-center justify-center divide-x w-1/2' >
            <Select  >
              <SelectTrigger className="  bg-white text-black rounded-none border-none">
                <SelectValue placeholder="Car Category" />
              </SelectTrigger>
              <SelectContent className={cn('outline-none bg-white text-black')}>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="  bg-white text-black rounded-none border-none">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent className={cn('outline-none bg-white text-black')}>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <button className='bg-white text-black py-2 px-4' >search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
