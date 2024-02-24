"use client";

import { FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full bg-[#474E68] text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-3xl pt-20">
          Join our parking revolution and be up to date with the coming changes!
        </p>
        <div className="lg:flex md:flex lg:mx-auto md:mx-auto w-full lg:w-[30%] md:w-[30%] h-10 mt-14">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="border-none text-base p-4 rounded-sm h-10 lg:mb-0 md:mb-0 mb-5 w-[67%]"
          />
          <button className="border-[1px] rounded-sm border-white text-xl h-10 px-3 items-center md:ml-4 lg:ml-4 w-[67%] md:w-36 lg:w-36">
            SubsCribe
          </button>
        </div>
        <p className="lg:text-3xl md:text-3xl text-3xl mt-20 md:mt-3 lg:mt3  mx-auto">You can unsubscribe at any time you want</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-16 md:pt-16 lg:pt-16 gap-6">
          <div className="text-left mx-auto">
            <h1 className="text-xl font-bold">Home</h1>
            <ul className="mt-3 text-base">
              <li className="hover:underline">About Share.P</li>
              <li className="hover:underline">How it works</li>
              <li className="hover:underline">Electric cars</li>
              <li className="hover:underline">Green mission</li>
              <li className="hover:underline">Impressum</li>
            </ul>
          </div>
          <div className="text-left mx-auto">
            <h1 className="text-xl font-bold">Solutions</h1>
            <ul className="mt-3 text-base">
              <li className="hover:underline">Office facilities</li>
              <li className="hover:underline">Commercial car parks</li>
              <li className="hover:underline">Hospitality industry</li>
              <li className="hover:underline">Residential areas</li>
              <li className="hover:underline">Municipalities & communities</li>
            </ul>
          </div>
          <div className="text-left mx-auto">
            <h1 className="text-xl font-bold">Shop</h1>
            <ul className="mt-3 text-base">
              <li className="hover:underline">Modules</li>
              <li className="hover:underline">Infrastructure</li>
              <li className="hover:underline">EV chargers</li>
              <li className="hover:underline">Management</li>
              <li className="hover:underline">App</li>
            </ul>
          </div>
          <div className="text-left mx-auto">
            <h1 className="text-xl font-bold">Blog</h1>
            <ul className="mt-3 text-base">
              <li className="hover:underline">News</li>
              <li className="hover:underline">Parking in the cities</li>
              <li className="hover:underline">Curiosities</li>
              <li className="hover:underline">Newsletter</li>
              <li className="hover:underline">FAQ</li>
            </ul>
          </div>
        </div>
        
          <div className="lg:flex md:flex md:w-[45%] lg:w-[45%] mx-auto pt-10">
            <h1 className="text-xl font-bold md:mr-10 lg:mr-10">Contact</h1>
            <p className="mr-2 hover:underline">support@sharep.io</p>{" "}
            <span className="lg:mx-2 md:mx-2 lg:text-white md:text-white text-transparent">|</span>
            <p className="mx-2 hover:underline">office@sharep.io</p>{" "}
            <span className="lg:mx-2 md:mx-2 lg:text-white md:text-white text-transparent">|</span>
            <p className="mx-2 hover:underline">investment@sharep.io</p>
          </div>
        
        <div className="lg:flex md:flex lg:w-[22%] md:w-[22%] mx-auto lg:pt-3 md:pt-3 pt-6">
          <p className="hover:underline">+48 22 777 41 41</p> <span className="mx-2 text-transparent lg:text-white md:text-white">|</span>
          <p className="hover:underline">+41 44 591 60 11</p>
        </div>
        <div className="lg:grid md:grid lg:grid-cols-4 md:grid-cols-4 pt-10 w-full">
          <p className="lg:col-span-1 md:col-span-1 text-3xl">Parking.S</p>
          <p className="col-span-2 lg:pt-2 md:pt-2 pt-5 lg:w-full md:w-full w-[90%] mx-auto text-[#d6d3d3] font-light">ShareP AG © 2024 - All rights reserved - <span className="hover:underline">Privacy Policy</span> - <span className="hover:underline">Terms of Use</span></p>
          <div className="col-span-1 pb-5 lg:pt-0 md:pt-0 pt-10">
            <button className="text-4xl mx-2"><FaFacebook/></button>
            <button className="text-4xl mx-2"><FaLinkedin/></button>
            <button className="text-4xl mx-2"><FaYoutube/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
