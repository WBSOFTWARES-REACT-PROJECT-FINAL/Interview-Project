'use client'
import { useState } from 'react';
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import Sidebar from './Sidebar'; 

export default function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <header className="bg-white shadow-lg shadow-gray-300 p-2 w-full">
      <div className="flex justify-between md:justify-end">
        <span className='md:hidden' onClick={toggleSidebar}>
          <IoMdMenu className="w-10 h-10 cursor-pointer" />
        </span>
        <div className="">
          <Link href='/memberShip'>
            <img src="./user_icon.png" alt="User" className="h-10 rounded-full" />
          </Link>
        </div>
      </div>

      {isSidebarVisible && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
          <div className="bg-white h-full w-64 p-4" onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}
    </header>
  );
}
