import React from 'react';

export default function ContactSellerPage({ }: { params: { id: string } }) {
  return (
    <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
       <h1 className="text-3xl text-blue-500 font-extrabold underline font-sans text-center">Contact Seller</h1>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-blue-500 text-sm outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-blue-500 text-sm outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2.5 text-gray-800 bg-gray-100 border focus:border-blue-500 text-sm outline-none"
        />
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide text-sm px-4 py-2.5 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}
