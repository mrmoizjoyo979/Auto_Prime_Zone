import { client } from '../../lib/sanity'; 

export async function getCars() {
  const cars = await client.fetch('*[_type == "car"]');  
  return cars;
}

export default async function handler(req, res) {
  try {
    const cars = await getCars(); 
    res.status(200).json(cars);   
  } catch (error) {
    console.error('Failed to fetch cars:', error);  // Log the error
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
}
