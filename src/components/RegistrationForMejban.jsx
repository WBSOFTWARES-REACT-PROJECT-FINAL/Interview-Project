'use client'

import { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const RegistrationForMejban = () => {
    const [showPhoneInput, setShowPhoneInput] = useState(false);

    const togglePhoneInput = () => {
        setShowPhoneInput(!showPhoneInput);
    };

    return (
        <div className='flex-row md:flex'>
            <div className='border_shadow mx-2 mt-2 text-center md:w-1/3 flex items-center justify-center relative'>
                <div className=''>
                    <h2 className='text-5xl font-bold mb-4'>Registration for Mejban</h2>
                    <p><span className='font-semibold'>Date :</span> SUNDAY 7 July 2024 (11.00 am to 11.00 pm)</p>
                    <p><span className='font-semibold'>Venue :</span> Mayfair Venue Chadwell Health 1078-1082 High Rd Romford, RM6 4BD</p>
                    <p><span className='font-semibold'>Entry Fee :</span> £10 (10 Years to Adult) £5 (6 year to 9 years and under 6 years free)</p>

                    <div>
                        <p className='text-lg font-bold mb-2 mt-4'>Already have registered?</p>
                        <button onClick={togglePhoneInput} className='rounded-sm mt-2 px-2 py-1 text-white bg-slate-900'>
                            See Invitation
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute w-full left-0 bottom-0 transition-transform transform ${showPhoneInput ? 'translate-y-0' : 'translate-y-full'} duration-700 ease-in-out`}
                >
                    <div className='bg-slate-900 text-start text-white p-6 flex flex-col'>
                        <label>Phone Number</label>
                        <input className='my-2 py-2 pl-3' placeholder='Type Here' type='number' />
                        <button className='bg-purple-600 p-2 w-20'>Submit</button>
                    </div>
                </div>
            </div>

            <div className='border_shadow mx-2 mt-2 md:w-1/3'>
                <RegistrationForm />
            </div>
            <div className='border_shadow mx-2 mt-2 md:w-1/3'>
                <img className='w-full h-full object-cover' src='/event_details.jpg' />
            </div>
        </div>
    );
};

export default RegistrationForMejban;
