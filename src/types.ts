export interface Product {
  name: string;
  description: string;
  brand: string;
  material: string;
  count: number;
  price: number;
  _id: string;
}

export interface ProfileProps {
  name: string;
  lastName: string;
  email: string;
  country: string;
  verify: boolean;
}
