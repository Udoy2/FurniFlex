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
  }
];

export { productData };
