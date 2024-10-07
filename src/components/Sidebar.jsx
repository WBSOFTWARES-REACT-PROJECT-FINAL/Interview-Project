'use client'

import Link from 'next/link';
import { HiUserGroup } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdContacts } from "react-icons/md";


export default function Sidebar() {
  return (
    <aside className="h-[100vh] p-4 hidden md:block md:fixed ">
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="w-28 h-auto mx-auto" />
      </div>
      <nav>
        <p className='text-sm text-gray-400 font-bold w-full duration-200 my-2'>Overview</p>
        <ul className='overflow-hidden transition-all duration-500 ease-in-out navbar'>
          <li><Link href='/' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><HiUserGroup /></span> <span className=''>Home</span></Link></li>
          <li><Link href='/about' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><FaFileAlt /></span> <span className=''>About</span></Link></li>
          <li><Link href='/photos' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><MdOutlinePhotoCameraFront /></span> <span className=''>Photos</span></Link></li>
          <li><Link href='/videos' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><MdOutlineVideoLibrary /></span> <span className=''>Videos</span></Link></li>
          <li><Link href='/contacts' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><MdContacts /></span> <span className=''>Contacts</span></Link></li>
        </ul>
        <p className='text-sm text-gray-400 font-bold w-full duration-200 my-2'>Registration</p>
        <ul className='overflow-hidden transition-all duration-500 ease-in-out'>
          <li><Link href='/mejban' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><MdContacts /></span> <span className=''>Registration For Mejban</span></Link></li>
          <li><Link href='/memberShip' className='btn_style flex gap-2 items-center pl-3'><span className='icon'><MdContacts /></span> <span className=''>Become a member</span></Link></li>
        </ul>
      </nav>
    </aside>
  );
}
