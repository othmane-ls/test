import React from "react";
import Sidebar from "./sidebar";
import { IoIosMail } from "react-icons/io";
import { useSelector } from "react-redux";
import { GrLanguage } from "react-icons/gr";
import { IoPersonCircleSharp } from "react-icons/io5";
import DynamicPage from "./dashboardOverView";

const Navbar: React.FC = () => {
  const pageName = useSelector(
    (state: any) => state.counterSlice.componentName
  ); //Access the componentName value

  return (
    <div className="flex bg-[#fffaf7] h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <nav className="bg-[#fffaf7] shadow-md w-full h-40 flex items-center px-8">
          <div className="absolute left-[260px]">
            <p className="font-black text-3xl">{pageName}</p>
          </div>
          <div className="ml-auto flex items-center space-x-6">
            <IoIosMail className="h-8 w-auto" />
            <GrLanguage className="h-7 w-auto" />
            <IoPersonCircleSharp className="h-7 w-auto" />
          </div>
        </nav>

        {/* Chosen page */}
        <DynamicPage />
      </div>
    </div>
  );
};

export default Navbar;
