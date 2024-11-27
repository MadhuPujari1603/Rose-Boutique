import React, { useState } from 'react';

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roseType: '',
    quantity: 1,
  });

  const roseOptions = [
    'Sunlit Bliss',
    'Scarlet Passion',
    'Crimson Whispers',
    'Velvet Desire',
    'Crimson Embrace',
    'Ruby Devotion',
    'Lover’s Elegance',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Details:', formData);
    alert(`Thank you ${formData.name}! Your order for ${formData.quantity} "${formData.roseType}" rose(s) has been placed successfully!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      roseType: '',
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200 py-12 px-6 flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-pink-500 to-pink-400 text-white text-center py-8 px-4">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Order Your Roses</h1>
          <p className="text-lg font-medium">Make every moment special with our premium roses</p>
        </header>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-12 space-y-6"
        >
          {/* Name Input */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>

          {/* Address Input */}
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            ></textarea>
          </div>

          {/* Rose Type Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="roseType"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Choose Rose Type
            </label>
            <select
              id="roseType"
              name="roseType"
              value={formData.roseType}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            >
              <option value="">Select a Rose</option>
              {roseOptions.map((rose, index) => (
                <option key={index} value={rose}>
                  {rose}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Input */}
          <div className="flex flex-col">
            <label
              htmlFor="quantity"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-pink-500 to-pink-400 text-white py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:from-pink-600 hover:to-pink-500 transition-all duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
