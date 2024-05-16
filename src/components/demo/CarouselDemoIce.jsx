import { dataProduct } from "@/constants";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemoIce() {
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
          <CarouselItem key={i} className="sm:basis-1/4 lg:basis-1/4">
            <CardContent className=" bg-yellow-500 overflow-hidden ">
              <img
                className=" hover:scale-110 ease-in-out duration-300  bg-center bg-cover "
                src={item.image}
              ></img>
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
