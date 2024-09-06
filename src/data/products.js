import { product, product1, product2, product3, product4, product5 } from "../assets";

const productData = [
  {
    id: 1,
    name: "Recliner Chair Wood",
    price: 299,
    originalPrice: 350,
    discount: `${Math.round(((350 - 299) / 350) * 100)}% OFF`,
    description: "It has a backrest that can be tilted back, and often a footrest extended",
    image: product
  },
  {
    id: 2,
    name: "Timber Ride Padded",
    price: 59,
    originalPrice: 76,
    discount: `${Math.round(((76 - 59) / 76) * 100)}% OFF`,
    description: "High Back Rocking Slide Pocket Portable Folding Outdoor Camping Chairs",
    image: product1
  },
  {
    id: 3,
    name: "Colored Wooden Chair",
    price: 299,
    originalPrice: 350,
    discount: `${Math.round(((350 - 299) / 350) * 100)}% OFF`,
    description: "A wooden chair with a tilted backrest and footrest",
    image: product2
  },
  {
    id: 4,
    name: "Recliner Chair Wood",
    price: 299,
    originalPrice: 350,
    discount: `${Math.round(((350 - 299) / 350) * 100)}% OFF`,
    description: "It has a backrest that can be tilted back, and often a footrest extended",
    image: product3
  },
  {
    id: 5,
    name: "Timber Ride Padded",
    price: 59,
    originalPrice: 76,
    discount: `${Math.round(((76 - 59) / 76) * 100)}% OFF`,
    description: "High Back Rocking Slide Pocket Portable Folding Outdoor Camping Chairs",
    image: product4
  },
  {
    id: 6,
    name: "Colored Wooden Chair",
    price: 299,
    originalPrice: 350,
    discount: `${Math.round(((350 - 299) / 350) * 100)}% OFF`,
    description: "A wooden chair with a tilted backrest and footrest",
    image: product5
  },
  // New Products
  {
    id: 7,
    name: "Classic Armchair",
    price: 199,
    originalPrice: 250,
    discount: `${Math.round(((250 - 199) / 250) * 100)}% OFF`,
    description: "Comfortable armchair with a classic design and sturdy wood frame.",
    image: product1
  },
  {
    id: 8,
    name: "Modern Lounge Chair",
    price: 349,
    originalPrice: 400,
    discount: `${Math.round(((400 - 349) / 400) * 100)}% OFF`,
    description: "A sleek lounge chair with a modern design and durable fabric.",
    image: product2
  },
  {
    id: 9,
    name: "Outdoor Folding Chair",
    price: 45,
    originalPrice: 60,
    discount: `${Math.round(((60 - 45) / 60) * 100)}% OFF`,
    description: "Lightweight and portable folding chair perfect for outdoor use.",
    image: product3
  },
  {
    id: 10,
    name: "Vintage Rocking Chair",
    price: 150,
    originalPrice: 200,
    discount: `${Math.round(((200 - 150) / 200) * 100)}% OFF`,
    description: "A vintage rocking chair with a beautiful wooden finish.",
    image: product4
  },
  {
    id: 11,
    name: "Luxury Recliner",
    price: 499,
    originalPrice: 550,
    discount: `${Math.round(((550 - 499) / 550) * 100)}% OFF`,
    description: "A luxurious recliner with plush cushions and leather upholstery.",
    image: product5
  },
  {
    id: 12,
    name: "Minimalist Chair",
    price: 89,
    originalPrice: 120,
    discount: `${Math.round(((120 - 89) / 120) * 100)}% OFF`,
    description: "A minimalist chair with a simple design, ideal for modern interiors.",
    image: product
  },
  {
    id: 13,
    name: "Ergonomic Office Chair",
    price: 149,
    originalPrice: 180,
    discount: `${Math.round(((180 - 149) / 180) * 100)}% OFF`,
    description: "An ergonomic chair designed to provide comfort during long work hours.",
    image: product1
  },
  {
    id: 14,
    name: "Classic Dining Chair",
    price: 129,
    originalPrice: 160,
    discount: `${Math.round(((160 - 129) / 160) * 100)}% OFF`,
    description: "A classic wooden dining chair with a comfortable padded seat.",
    image: product2
  },
  {
    id: 15,
    name: "Portable Camping Chair",
    price: 39,
    originalPrice: 50,
    discount: `${Math.round(((50 - 39) / 50) * 100)}% OFF`,
    description: "A compact and portable chair for camping and outdoor activities.",
    image: product3
  },
  {
    id: 16,
    name: "Luxury Lounge Chair",
    price: 399,
    originalPrice: 450,
    discount: `${Math.round(((450 - 399) / 450) * 100)}% OFF`,
    description: "A luxurious lounge chair with a contemporary design.",
    image: product4
  }
];


export { productData };
