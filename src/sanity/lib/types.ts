export type StockStatus = 'In Stock' | 'Out of Stock';

export interface Car {
  _id: string; 
  make: string;
  model: string;
  year: number;
  price: number;
  image: {
    asset: {
      _id: string;
      url: string; 
    };
  };
  stockStatus: StockStatus; 
  description?: string; 
  shortdescription? : string; 
}
