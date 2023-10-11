import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/image/Brands.jpg",
    title: "Brand Perfume",
    desc: "A special Perfume of Brand Company .",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/image/lipstics.jpg",
    title: "Lipsticks",
    desc: "Brand company Lipsticks",
    rating: 5,
    price: "9.00",
  },
  {
    img: "/image/party-wear-1.jpg",
    title: "Lady Shoes",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/image/skirt-1.jpg",
    title: "Skirt",
    desc: "Pure Garment Dyed Cotton Skirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/image/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/image/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/image/watch-1.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/image/lipstics.jpg",
    title: "Lipsticks",
    desc: "Brand company Lipsticks",
    rating: 5,
    price: "9.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Cosmetics</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 ">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
