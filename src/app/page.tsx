"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import CarListing from "./components/CarListing";
import { Car } from "@/sanity/lib/types";
import { GET_ALL_CARS } from "@/sanity/lib/queries";

const client = createClient({
  projectId: "fkhlx7dv",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});

const HomePage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      const data: Car[] = await client.fetch(GET_ALL_CARS);
      setCars(data);
    };
    fetchCars();
  }, []);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim();
    setSearchQuery(query);

    if (query === "") {
      const data: Car[] = await client.fetch(GET_ALL_CARS);
      setCars(data);
    } else {
      const searchQuery = `
        *[_type == "car" && (make match "${query}" || model match "${query}")] {
          _id,
          make,
          model,
          year,
          price,
          image {
            asset -> {
              _id,
              url
            }
          },
          stockStatus,
          description
        }
      `;
      const data: Car[] = await client.fetch(searchQuery);
      setCars(data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-500 font-sans underline mb-4">
          Find Your Perfect Car!!
        </h1>
        <p className="text-lg text-black font-sans mb-8">
          Search from a wide variety of cars based on make and model.
        </p>
        
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by make or model"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.65 16.65A7.35 7.35 0 1116.65 2.65a7.35 7.35 0 010 14.7z"
            />
          </svg>
        </div>
      </div>

  
      <div className="mt-10">
        <CarListing cars={cars} fetchMoreCars={function (): void {
          throw new Error("Function not implemented.");
        } } hasMore={false} />
      </div>
    </div>
  );
};

export default HomePage;
