import { Car } from "@/sanity/lib/types";
import Link from "next/link";
import Image from "next/image";

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="car-card border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group overflow-hidden bg-white">
      <div className="w-full h-48 relative">
        <Image
          src={car.image?.asset?.url || "/placeholder.png"}
          alt={`${car.make} ${car.model} car image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>

      <div className="p-3 text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4 group-hover:text-blue-500 transition-colors duration-300">
          {car.make || "Unknown Make"} {car.model || "Unknown Model"}
        </h3>
        <p className="text-gray-500 text-sm mt-2 truncate">
          {car.shortdescription ?? "No description available."}
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-3">
          Price: <span className="text-blue-500">${car.price}</span>
        </p>
      </div>

      <div className="text-center p-6">
        <Link href={`/cars/${car._id}`}>
          <button className="w-28 py-3 font-bold font-sans bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
