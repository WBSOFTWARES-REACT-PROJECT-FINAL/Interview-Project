'use client'

import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        guest10Plus: 2,
        guest6Plus: 2,
        guestUnder6: 1,
        addressUK: '',
        districtBD: ''
    });

    const [totalMembers, setTotalMembers] = useState(5);
    const [totalAmount, setTotalAmount] = useState(30);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        const totalGuests =
            parseInt(formData.guest10Plus) + parseInt(formData.guest6Plus) + parseInt(formData.guestUnder6);
        const totalCost =
            formData.guest10Plus * 10 + formData.guest6Plus * 5; // Free for guests under 6

        setTotalMembers(totalGuests);
        setTotalAmount(totalCost);

        // const handleSubmit = () => {

        // }
    };

    return (
        <form className="max-w-xl mx-auto bg-white space-y-2">
            <div>
                <label className="block text-gray-700 font-bold mb-2">Full Name <span className='text-red-600 font-bold'>*</span></label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Email Address <span className='text-red-600 font-bold'>**</span></label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Phone <span className='text-red-600 font-bold'>*</span></label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Guest (10+)<span className='text-red-600 font-bold'>*</span></label>
                    <select
                        name="guest10Plus"
                        value={formData.guest10Plus}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Guest (6+)</label>
                    <select
                        name="guest6Plus"
                        value={formData.guest6Plus}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Guest (-6)</label>
                    <select
                        name="guestUnder6"
                        value={formData.guestUnder6}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-gray-700 font-bold mb-2">Address in UK <span className='text-red-600 font-bold'>*</span></label>
                <textarea
                    name="addressUK"
                    value={formData.addressUK}
                    onChange={handleChange}
                    placeholder="Address in UK"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                ></textarea>
            </div>

            <div>
                <label className="block text-gray-700  font-bold mb-2">Your District of Origin in Bangladesh</label>
                <textarea
                    name="districtBD"
                    value={formData.districtBD}
                    onChange={handleChange}
                    placeholder="Your district of origin in BD"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                ></textarea>
            </div>

            <div className="mt-6 max-w-lg mx-auto">
                <table className="w-full border border-gray-300 text-sm text-left border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">Age</th>
                            <th className="p-2">Fee</th>
                            <th className="p-2">Qty</th>
                            <th className="p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody className='font-semibold'>
                        <tr>
                            <td className="p-2">Guest above 10 years:</td>
                            <td className="p-2">£10</td>
                            <td className="p-2">{formData.guest10Plus}</td>
                            <td className="p-2">£{formData.guest10Plus * 10}</td>
                        </tr>
                        <tr>
                            <td className="p-2">Guest 6 to 9 years:</td>
                            <td className="p-2">£5</td>
                            <td className="p-2">{formData.guest6Plus}</td>
                            <td className="p-2">£{formData.guest6Plus * 5}</td>
                        </tr>
                        <tr>
                            <td className="p-2">Guest below 6 years:</td>
                            <td className="p-2">Free</td>
                            <td className="p-2">{formData.guestUnder6}</td>
                            <td className="p-2">£0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold bg-blue-600 text-white px-4 py-2 rounded-3xl">Total Member: {totalMembers}</p>
                <p className="text-lg font-bold bg-blue-600 text-white px-4 py-2 rounded-3xl">£{totalAmount}</p>
            </div>
            <div>
                <button className='text-lg w-full font-bold bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md'>Submit</button>
            </div>

        </form>
    );
};

export default RegistrationForm;
