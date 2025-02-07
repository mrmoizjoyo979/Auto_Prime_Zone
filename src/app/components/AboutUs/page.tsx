import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">

      <section className="relative bg-blue-500 text-white">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl text-white font-sans font-extrabold underline mb-4">About Us!</h1>
          <p className="text-lg max-w-2xl text-white font-bold font-sans mx-auto">
            We’re passionate about connecting car buyers and sellers on a secure, user-friendly platform. Experience the future of car marketplaces.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold underline text-blue-500 mb-6">Our Story!</h2>
          <p className="text-black font-sans font-bold leading-relaxed">
            Our journey began with a simple goal: to make the car buying and selling process seamless and enjoyable. Today, we’ve grown into a trusted platform for car enthusiasts, casual buyers, and sellers, offering a reliable and transparent experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold underline text-blue-500 font-sans text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold  text-blue-500 underline font-sans mb-4">Verified Listings</h3>
              <p className="text-black font-sans">We offer a wide range of verified car listings, ensuring authenticity and quality.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-500 underline font-sans mb-4">Advanced Search</h3>
              <p className="text-black font-sans">Find your dream car easily with advanced search and filtering options.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-500 font-sans underline mb-4">Secure Payments</h3>
              <p className="text-black font-sans">Secure booking and payment integration for a worry-free experience.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-500 font-sans underline mb-4">Responsive Design</h3>
              <p className="text-black font-sans">Access our platform on any device with a fully responsive interface.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-500 font-sans underline mb-4">Direct Communication</h3>
              <p className="text-black font-sans">Connect directly with sellers for transparent communication.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-500 font-sans underline mb-4">Trusted by Thousands</h3>
              <p className="text-black font-sans">Join a growing community of happy buyers and sellers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-500 font-sans underline mb-6">Our Vision!</h2>
          <p className="text-black font-sans font-bold leading-relaxed">
            Our vision is to create a global community of car lovers and become the go-to platform for buying and selling cars. We are constantly innovating to bring you the best experience possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
