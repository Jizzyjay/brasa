import type { Category, Dish, NavLink, Testimonial } from "@/lib/types";

export const brand = {
  name: "Brasa",
  tagline: "Good Food. Delivered Fresh.",
  blurb:
    "A Lagos kitchen sending wood-fired favorites and weeknight comfort to your door — still steaming.",
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export const categories: Category[] = [
  {
    id: "burgers",
    name: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    alt: "Stacked beef burger with melted cheese",
  },
  {
    id: "pizza",
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    alt: "Wood-fired margherita pizza",
  },
  {
    id: "chicken",
    name: "Chicken",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
    alt: "Roasted chicken with herbs",
  },
  {
    id: "rice",
    name: "Rice",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    alt: "Bowl of spicy fried rice",
  },
  {
    id: "pasta",
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80",
    alt: "Creamy pasta in a bowl",
  },
  {
    id: "desserts",
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    alt: "Chocolate layer cake",
  },
  {
    id: "drinks",
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80",
    alt: "Chilled citrus drink",
  },
];

export const dishes: Dish[] = [
  {
    id: "signature-beef-burger",
    name: "Signature Beef Burger",
    description: "Dry-aged beef, smoked cheddar, pickles, and our chili aioli.",
    price: 6500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    alt: "Signature beef burger on a wooden board",
    categoryId: "burgers",
    tag: "Best Seller",
  },
  {
    id: "truffle-chicken-pasta",
    name: "Truffle Chicken Pasta",
    description: "Hand-cut tagliatelle, roasted chicken, and black truffle cream.",
    price: 8200,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    alt: "Truffle chicken pasta in a ceramic bowl",
    categoryId: "pasta",
    tag: "Popular",
  },
  {
    id: "spicy-chicken-rice",
    name: "Spicy Chicken Rice",
    description: "Charred chicken, scotch-bonnet oil, and party-style jollof rice.",
    price: 5400,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
    alt: "Spicy chicken rice in a bowl",
    categoryId: "rice",
    tag: "Popular",
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "San Marzano tomato, fior di latte, and torn basil on a blistered crust.",
    price: 7800,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    alt: "Margherita pizza with fresh basil",
    categoryId: "pizza",
  },
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    description: "Buttermilk-fried thigh, cabbage slaw, and honey-chili glaze.",
    price: 5900,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    alt: "Crispy chicken burger with lettuce",
    categoryId: "burgers",
  },
  {
    id: "creamy-alfredo-pasta",
    name: "Creamy Alfredo Pasta",
    description: "Fettuccine, cracked pepper, aged parmesan, and slow butter sauce.",
    price: 7500,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1645112414472-b6c1dd0c132f?auto=format&fit=crop&w=900&q=80",
    alt: "Creamy alfredo pasta with parsley",
    categoryId: "pasta",
  },
  {
    id: "dark-chocolate-torte",
    name: "Dark Chocolate Torte",
    description: "Flourless cocoa cake, sea salt, and a spoon of whipped cream.",
    price: 4200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    alt: "Slice of dark chocolate torte",
    categoryId: "desserts",
  },
  {
    id: "hibiscus-cooler",
    name: "Hibiscus Cooler",
    description: "Zobo, ginger, lime, and mint — cold enough for Lagos traffic.",
    price: 2100,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
    alt: "Hibiscus cooler in a tall glass",
    categoryId: "drinks",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "adaeze",
    name: "Adaeze Okonkwo",
    neighborhood: "Lekki",
    quote:
      "The burger arrived hotter than I expected. I ordered again the same week — that never happens.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "tunde",
    name: "Tunde Adebayo",
    neighborhood: "Ikeja",
    quote:
      "Spicy chicken rice that actually tastes like someone’s kitchen, not a styrofoam box.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "amaka",
    name: "Amaka Eze",
    neighborhood: "Victoria Island",
    quote:
      "Late meeting, 30-minute delivery, pasta still glossy. Brasa has ruined other apps for me.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "james",
    name: "James Okoro",
    neighborhood: "Yaba",
    quote:
      "I keep the hibiscus cooler on speed-dial. Fresh, sharp, and it shows up when they say it will.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80",
  },
];

export const heroStats = {
  rating: "4.9",
  delivery: "25–35 min",
  customers: "12k+",
  popularDish: "Signature Beef Burger",
};
