import React, { useState } from 'react';

const MemberShipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    addressUK: '',
    addressCTG: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Full Name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Phone *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Email address"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Gender *</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Address in UK *</label>
        <textarea
          name="addressUK"
          value={formData.addressUK}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter your UK address"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Address in CTG *</label>
        <textarea
          name="addressCTG"
          value={formData.addressCTG}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          placeholder="Enter your CTG address"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Image *</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg mt-4 hover:bg-purple-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default MemberShipForm;
