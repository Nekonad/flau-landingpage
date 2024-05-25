import React from "react";
import gsap from "gsap";
import background from "../assets/img/bg.webp";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Hero = () => {
  useGSAP(() => {
    gsap.set("#herobg", {
      scale: 0.9,
    });
  });
  useGSAP(() => {
    gsap.from(".h1", 1, {
      delay: 1,
      y: 700,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power1.inOut",
    });
    gsap.from("#herobg", 1.5, {
      delay: 1.5,
      y: 400,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  });

  return (
    <>
      <div className="flex flex-col w-100 space-between overflow-hidden pt-24 ">
        <div className="flex font-bold tracking-wider text-[12em] justify-center mx-4">
          <h1 className="h1 relative">F</h1>
          <h1 className="h1 relative">L</h1>
          <h1 className="h1 relative">A</h1>
          <h1 className="h1 relative">U</h1>
        </div>
        <div id="herobg" className=" h-screen relative flex justify-center  ">
          <div className="text-title w-100 md:w-3/4 text-neutral-50 z-20 absolute h-full flex flex-col justify-center">
            <div className="mt-32 md:mt-0 ">
              <h2 className="text-4xl font-semibold items-start py-8 tracking-widest">
                Story
              </h2>
              <p className=" text-base leading-8 tracking-wider text-zinc-950 md:text-zinc-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis at, nulla minima, deserunt exercitationem quibusdam,
                tempore nihil repellendus molestias eum neque temporibus et ab
                rem?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                adipisci minus debitis, nam numquam tempore voluptas ipsum
                voluptatem placeat quaerat. Voluptatum vero id quia non
                consequuntur. Adipisci perspiciatis nesciunt eligendi.
              </p>
            </div>
          </div>
          <div className="bg-black absolute z-10 top-0 h-full w-full opacity-0 md:opacity-50  "></div>
          <div className=" ">
            <img
              className="object-cover bg-center w-screen md:w-screen md:h-full"
              src={background}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
