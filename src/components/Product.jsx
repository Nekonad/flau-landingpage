import React from "react";
import { CarouselDemoIce } from "./demo/CarouselDemoIce.jsx";
const Product = () => {
  return (
    <div>
      <>
        <div className="w-full h-screen">
          <div className="flex flex-col">
            <h2 className="items-start text-4xl mx-4 font-semibold tracking-wide">
              Product
            </h2>
            <div className="w-full justify-center items-center flex flex-col">
              <CarouselDemoIce></CarouselDemoIce>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
