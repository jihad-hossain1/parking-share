import DashboardSidebar from "@/components/dashboardCompo/DashboardSidebar/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-5 relative">
      <DashboardSidebar />
      <main className=" bg-violet-50 dark:bg-violet-950 min-h-screen w-full p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
