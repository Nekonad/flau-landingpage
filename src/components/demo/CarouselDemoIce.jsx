import React, { useState } from "react";
import { dataProduct } from "@/constants";
import { CardContent } from "@/components/ui/card";
import ModalDemo from "./ModalDemo";

// CAROUSEL
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemoIce() {
  const [currentItem, setCurrentItem] = useState(null);

  // const handleOnClose = () => setShowModal(fasle);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-auto"
    >
      <CarouselContent>
        {dataProduct.map((item, i) => (
          <CarouselItem
            key={i}
            className="basis-1/4 lg:basis-1/4 overflow-hidden"
          >
            <div className="overflow-hidden px-0 md:px-6">
              <button onClick={() => setCurrentItem(item)}>
                <CardContent className=" overflow-hidden p-0 ">
                  <img
                    className=" hover:scale-110 w-full h-full ease-in-out duration-300  bg-center bg-cover "
                    src={item.image}
                  ></img>
                  <span className="text-4xl font-semibold">{item.title}</span>
                </CardContent>
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:flex hidden" />
      <CarouselNext className="lg:flex hidden" />

      <ModalDemo
        onClose={() => setCurrentItem(null)}
        visible={currentItem}
        item={currentItem}
      />
    </Carousel>
  );
}
