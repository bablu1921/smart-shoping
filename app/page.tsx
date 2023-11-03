import React from "react";
import lame from "../public/assets/icons/arrow-right.svg";
import Image from "next/image";
import { Searchbar } from "@/components/Searchbar";
import Herocarousel from "@/components/Herocarousel";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

export const Home = async () => {
  const allProducts = await getAllProducts();
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image src={lame} alt="arrow-right" width={16} height={16} />
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> Smart Shopping</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <Herocarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
