import React from "react";
import SideNavbar from "../components/SideNavbar";
import { useState } from "react";
import Bottombar from "../components/Bottombar";
function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(formData);
  };
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <SideNavbar></SideNavbar>
      <div className="flex gap-6 pt-7">
        <button className="w-1/12 ml-20 ">
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
            alt=""
          />
        </button>
        <div className="w-1/12 text-sm border-2    border-black rounded-full p-1 h-8 flex justify-center items-center">
          PRIVACY POLICY
        </div>
        <div className="w-72 border-2  border-black rounded-full flex justify-center items-center h-8">
          TERMS AND CONDITIONS OF USE
        </div>
        <div className="w-80 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          TERMS AND CONDITIONS OF SALE
        </div>
        <div className="w-1/12 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          LEGAL NOTICE
        </div>
        <div className="w-1/12 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          RETURN POLICY
        </div>
        <div className="w-1/12 border-2  border-black rounded-full flex justify-center items-center p-1 h-8">
          ACCESSIBILITY
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title *
            </label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700"
            >
              Topic *
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select a topic</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Type your message here...
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            maxLength="1000"
            required
          />
          <span className="text-sm text-gray-500">1000 characters max</span>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-cyan-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
          >
            SEND
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>
            EcoBazaar processes the data collected in order to respond to you
            when you contact us via the contact page. To find out more about how
            we manage your personal data and to exercise your rights, please
            refer to our{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
          <p className="mt-2">
            <strong>*Mandatory information:</strong> If you choose not to
            consent to the collection of mandatory data, you will not be able to
            contact us.
          </p>
        </div>
      </form>
      <Bottombar></Bottombar>
    </div>
  );
}

export default Contact;
