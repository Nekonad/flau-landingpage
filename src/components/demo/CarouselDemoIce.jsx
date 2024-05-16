import { dataProduct } from "@/constants";
import { CardContent } from "@/components/ui/card";
// CAROUSEL
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
          <CarouselItem
            key={i}
            className="basis-1/4 lg:basis-1/4 overflow-hidden"
          >
            <div className="overflow-hidden px-0 md:px-6">
              <CardContent className=" overflow-hidden p-0 ">
                <img
                  className=" hover:scale-110 w-full h-full ease-in-out duration-300  bg-center bg-cover "
                  src={item.image}
                ></img>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:flex hidden" />
      <CarouselNext className="lg:flex hidden" />
    </Carousel>
  );
}
