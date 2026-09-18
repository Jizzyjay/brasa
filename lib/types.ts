export type NavLink = {
  href: string;
  label: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  alt: string;
};

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  alt: string;
  categoryId: string;
  tag?: "Popular" | "Best Seller";
};

export type Testimonial = {
  id: string;
  name: string;
  neighborhood: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
