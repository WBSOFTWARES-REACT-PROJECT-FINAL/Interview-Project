'use client'
import React, { useEffect } from 'react';

export default function AboutComponent() {

    useEffect(() => {
        const smallImage = document.getElementById('small-image');
        let direction = 1;
        let position = 0;

        const animateImage = () => {
            position += direction * 0.4;
            smallImage.style.transform = `translateY(${position}px)`;

            if (position > 20 || position < -20) {
                direction *= -1;
            }

            requestAnimationFrame(animateImage);
        };

        animateImage();
    }, []);

    return (
        <div className='my-10'>
            <h2 className='text-center font-extrabold text-5xl mb-10'>About Us</h2>
            <div className='mx-2 mt-4 flex md:gap-2 flex-col lg:flex-row'>
                <div className='bg-white rounded-lg px-5 md:mb-0 lg:w-1/2 justify-center'>
                    <h2 className='font-bold text-4xl my-10'>Welcome to ITDER Institute of Technology</h2>
                    <p className='pb-2'>ITDER institute of technology provides top notch Language Training courses, IT Training, Software Training, Hardware and Networking Courses, Programming Language Courses, Non IT Courses, Accounting courses to fresh graduates as well Experienced professionals and help students to gain knowledge and upgrade their existing skills in various fields.<br /><br />

                        Our aim is to help students to enhance their skills which enable them to grow in professional life at fast pace. ITDER institute of technology staff includes experts from various industries who have joined together to share their expert knowledge with future generation and help them in shaping their careers.<br /><br />

                        The decision to entrust aspects of your time to a Training institute is an important one. Whether it is gain knowledge or to enhance existing skill to increase your credibility with a view to grow in your career, choosing the right training institute is essential. You need a Training Institute that will be a good investment for your money, time, and reputation. In short, you need a Best IT & Non IT Training Institute in Bangalore that will make you time spent a safe proposition and ITDER Institute of Technology is that name.</p>
                </div>
                <div>
                    <div className="relative bg-gray-100  flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl relative">
                            <img src='./career1.jpg' />

                            {/* Small animated image */}
                            <div id="small-image" className="absolute bottom-0 right-0 w-40 h-40 rounded-2xl shadow-lg overflow-hidden">
                                <img
                                    src="/career2.jpg"
                                    alt="Small Ad Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
