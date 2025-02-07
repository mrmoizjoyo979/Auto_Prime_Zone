import { Car } from '@/sanity/lib/types';
import CarCard from './CarCard';

interface CarListingProps {
  cars: Car[];
  fetchMoreCars: () => void;  
  hasMore: boolean;  
}

const CarListing = ({ cars, fetchMoreCars, hasMore }: CarListingProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-extrabold text-blue-500 font-sans underline mb-6">Car Listings:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
      {cars.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No cars available. Please check back later.
        </div>
      )}
      
  
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={fetchMoreCars}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CarListing;
