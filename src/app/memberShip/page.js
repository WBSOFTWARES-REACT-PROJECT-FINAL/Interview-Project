'use client'
import MemberShipForm from '@/components/MemberShipForm';
import React from 'react';

const MemberShip = () => {
    return (
        <div>
            <div className='text-center text-white p-16 m-2 mt-16 text-4xl font-medium bg-blue-500 '><h2>Become a Member</h2></div>
            <div className='mt-2  flex-row md:flex'>
                <div className='border_shadow mx-2 mt-2 md:w-1/3 items-start justify-center text-center md:text-start'><h1 className='text-2xl md:text-5xl font-bold'>Become a Member</h1></div>
                <div className='border_shadow mx-2 mt-2 md:w-1/3 '><MemberShipForm></MemberShipForm></div>
                <div className='border_shadow mx-2 mt-2 text-center md:w-1/3 items-center justify-center '>
                    <img src='./side_img.png'/>
                </div>
                
            </div>
            
        </div>
    );
};

export default MemberShip;