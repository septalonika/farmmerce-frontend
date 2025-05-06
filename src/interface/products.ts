type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  rating: number;
  duration?: string;
};

type Filters = {
  category: string;
  price: string;
  rating: string;
  stock: string;
};
