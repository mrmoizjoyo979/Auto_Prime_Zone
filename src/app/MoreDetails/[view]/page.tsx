"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@sanity/client";
import { GET_CAR_BY_ID } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { CarActionsMenu } from "@/app/components/CarActionsMenu";
import { Car } from "@/sanity/lib/types";


const client = createClient({
  projectId: "fkhlx7dv",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});

const fetchCarByIdView = async (id: string): Promise<Car | null> => {
  const query = GET_CAR_BY_ID;
  const params = { id };
  const result = await client.fetch(query, params);
  return result as Car;
};


function CarViewPage({ params }: { params: { id: string } }) {
  const [car, setCar] = useState<Car | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCarByIdView(params.id);
      if (!data) {
        notFound();
      }
      setCar(data);
    };
    fetchData();
  }, [params.id]);

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/2">
          <Image
            src={car.image?.asset?.url || "/placeholder.png"}
            alt={`${car.make} ${car.model}`}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {car.make} {car.model}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{car.description}</p>
          <div className="text-lg font-semibold space-y-2">
            <p>
              Price: <span className="text-blue-600">${car.price}</span>
            </p>
            <p>
              Status:{" "}
              <span
                className={car.stockStatus === "In Stock" ? "text-green-600" : "text-red-600"}
              >
                {car.stockStatus || "N/A"}
              </span>
            </p>
          </div>

          <div className="mt-6">
            <Link href="/ContactButton">
              <button className="w-full py-3 font-bold font-sans bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out">
                Contact Seller
              </button>
            </Link>
          </div>
          <div className="mt-6">
            <CarActionsMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarViewPage;
