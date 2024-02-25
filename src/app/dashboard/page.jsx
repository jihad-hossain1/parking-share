"use client"
import AddSpotModal from "@/components/ui/addSpotModal";
import { useState } from "react";


const Dashboard = () => {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <main className="pt-20">
      <div className="flex justify-end px-10">
        <button onClick={() => setIsOpen(!isOpen)} className="bg-[#A855F7] px-4 py-2 text-white rounded">Add Spot</button>
        <AddSpotModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </main>
  );
};

export default Dashboard;
