import React from "react";
import { CarouselDemoIce } from "./demo/CarouselDemoIce";
// import { DialogDemoIce } from "./demo/DialogDemoIce";
const Product = () => {
  return (
    <div>
      <>
        <div className="w-100 mx-5npx shadcn-ui@latest add dialog md:mx-28 h-screen">
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl  font-bold tracking-tight antialiased">
              PRODUCT
            </h2>
            <h3 className="text-2xl text-end py-4 md:pe-16 pe-0 font-semibold tracking-wide">
              ICED
            </h3>
            <div className="justify-center px-0 md:px-10 items-center flex flex-col overflow-hidden">
              <CarouselDemoIce></CarouselDemoIce>
            </div>
            {/* <DialogDemoIce></DialogDemoIce> */}
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
