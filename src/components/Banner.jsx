import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="mx-2 my-4 md:mt-4 flex md:gap-2 flex-col md:flex-row">
            
            <div className='bg-white rounded-sm py-8 px-5 mb-2 border-2 border-gray-300 md:w-1/2 justify-center'>
                {/* text section  */}
                <div className=''>
                    <h2 className='text-3xl font-bold text-black '>Learn the Skills you Need to Succeed.</h2>
                    <p className='font-normal text-lg my-10'>Best IT Training Institute in Dinajpur, Bangladesh with Instructor-led Live and Interactive Classes from Experienced Working Professionals, with 100% Placement Assistance.</p>
                </div>
                
                <div className='mt-16 flex gap-4'>
                    <Link href='/#courses' className="text-white bg-purple-500 py-3  px-6 font-semibold rounded-3xl "><button>Our Popular Courses</button></Link>
                    <Link href='/#' className="text-black hover:text-white  bg-white hover:bg-slate-900 py-3  px-6 font-semibold rounded-3xl relative  overflow-hidden border border-slate-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-slate-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-slate-900 after:duration-500   hover:before:h-2/4 hover:after:h-2/4"><button><span class="relative z-10">Our Popular Courses</span></button></Link>
                </div>
            </div>
            {/* youtube section  */}
            <div className='bg-white rounded-sm mb-2 p-1 border-2 border-gray-300 md:w-1/2 '>
                <img src='./ban.svg'/>
            </div>
        </div>
    );
};

export default Banner;