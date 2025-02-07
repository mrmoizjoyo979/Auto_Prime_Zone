import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  return (
    <><section className="bg-blue-500 py-12">
          <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl font-extrabold font-sans underline text-center text-black mb-8">
                  Contact Us!
              </h2>
              <p className="text-lg font-sans font-bold text-black max-w-2xl mx-auto">
                  We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your experience, feel free to reach out.
              </p>
          </div>
      </section><section>
              <div className="max-w-6xl mx-auto px-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                  <div className="space-y-6">
                      <div className="flex items-center">
                          <div className="p-4 bg-blue-500 rounded-full text-white">
                              <FiPhone size={24} />
                          </div>
                          <div className="ml-4">
                              <h4 className="text-lg font-bold text-black font-sans underline">Phone:</h4>
                              <p className="text-gray-600">+1 234 567 890</p>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div className="p-4 bg-green-500 rounded-full text-white">
                              <FiMail size={24} />
                          </div>
                          <div className="ml-4">
                              <h4 className="text-lg font-bold text-black font-sans underline">Email:</h4>
                              <p className="text-gray-600">autoprimezone@gmail.com</p>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div className="p-4 bg-red-500 rounded-full text-white">
                              <FiMapPin size={24} />
                          </div>
                          <div className="ml-4">
                              <h4 className="text-lg font-bold text-black font-sans underline">Address:</h4>
                              <p className="text-gray-600">123 Main Street, Karachi, Pakistan</p>
                          </div>
                      </div>
                  </div>
            
                  <form className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="mb-6">
                          <label
                              className="block text-gray-700 font-semibold mb-2"
                              htmlFor="name"
                          >
                              Name
                          </label>
                          <input
                              type="text"
                              id="name"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your name"
                              required />
                      </div>
                      <div className="mb-6">
                          <label
                              className="block text-gray-700 font-semibold mb-2"
                              htmlFor="email"
                          >
                              Email
                          </label>
                          <input
                              type="email"
                              id="email"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your email"
                              required />
                      </div>
                      <div className="mb-6">
                          <label
                              className="block text-gray-700 font-semibold mb-2"
                              htmlFor="message"
                          >
                              Message
                          </label>
                          <textarea
                              id="message"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Write your message"
                              rows={4} 
                              required
                          ></textarea>
                      </div>
                      <button
                          type="submit"
                          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                      >
                          Send Message
                      </button>
                  </form>
              </div>
          </section></>
  );
};

export default ContactUs;
