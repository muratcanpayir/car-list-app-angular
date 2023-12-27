export interface Car {
  carId: number;
  name: string;
  brand: string;
  imageUrl: string;
  pricing: number; // Assuming this is how the API sends pricing info
  zoomCarAccessoriess: [
    {
      accessoriesTitle: string;
    }
  ]; // Assuming this is how the API sends accessories info
  // ... any other relevant fields
}
