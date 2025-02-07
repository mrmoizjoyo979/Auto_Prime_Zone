"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex shadow-[0px_4px_16px_rgba(17,_17,_26,_0.1),_0px_8px_32px_rgba(17,_17,_26,_0.05)] py-4 px-4 sm:px-6 bg-white font-[sans-serif] min-h-[75px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-5 w-full max-w-screen-xl mx-auto">
        <a href="/">
          <p className="font-bold font-sans text-3xl text-blue-500">Auto_Prime_Zone</p></a>

        <div id="collapseMenu" className="lg:flex lg:ml-auto">
          <ul
            className={`lg:flex gap-4 max-lg:flex-col max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${isMenuOpen ? "block" : "hidden"}`}
          >
            <li>
              <a
                href="/"
                className="hover:text-[#007bff] px-3 py-2 text-[#007bff] font-semibold block text-[15px] hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/components/AboutUs"
                className="hover:text-[#007bff] px-3 py-2 text-[#333] font-semibold block text-[15px] hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/components/ContactUs"
                className="py-2 hover:text-[#007bff] px-3 text-[#333] font-semibold block text-[15px] hover:underline"
              >
                Contact
              </a>
            </li>
            
            <li>
              <a
                href="/SignIn"
                className="text-[#333] font-semibold block text-[15px]"
              >
                <button className="px-3.5 py-[7px] text-[15px] rounded font-semibold text-[#007bff] border border-[#007bff] hover:text-[#007bff]  transition-all ease-in-out duration-300 bg-transparent ">
                  Sign In
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center max-lg:ml-auto space-x-4">
          <a href="/SignUp">
            <button className="px-3.5 py-[7px] text-[15px] rounded font-semibold text-[#007bff] border border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent hover:text-white">
              Sign up
            </button>
          </a>

          <button
            onClick={toggleMenu}
            id="toggleOpen"
            className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#007bff] hover:bg-[#0056b3] rounded-full text-white transition-all duration-300"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
