
import Link from 'next/link';
import { createClient } from '@sanity/client';
import { Car } from '@/sanity/lib/types';
import { GET_CAR_BY_ID } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { CarActionsMenu } from '@/app/BookingButton/page';

const client = createClient({
  projectId: 'fkhlx7dv',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
});

const fetchCarByIdView = async (id: string) => {
    const query = GET_CAR_BY_ID;
    const params = { id: `"${id}"` }; 
    const car = await client.fetch(query, params);
    return car;
  };

async function CarViewPage({ params }: { params: { id: string } }) {
    const car = await fetchCarByIdView(params.id);
  
    if (!car) {
      notFound();
    }
  


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
            
                <div className="w-full md:w-1/2">
                    <img
                        src={car.image?.asset?.url || '/placeholder.png'}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-auto rounded-lg shadow-md" />
                </div>

        
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                        {car.make} {car.model}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">{car.description}</p>
                    <div className="text-lg font-semibold space-y-2">
                        <p>Price: <span className="text-blue-600">${car.price}</span></p>
                        <p>Status:
                            <span className={car.stockStatus === 'In Stock' ? "text-green-600" : "text-red-600"}>
                                {car.stockStatus || 'N/A'}
                            </span>
                        </p>
                    </div>


        
                    <div className="mt-6">
                        <a href="/ContactButton">
                            <button
                                className="w-full py-3 font-bold font-sans bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                            >
                                Contact Seller
                            </button>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <CarActionsMenu />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarViewPage;
