import React from "react";
import gsap from "gsap";
import background from "../assets/img/bg.webp";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  useGSAP(() => {
    gsap.from(".h1", 1.5, {
      delay: 1,
      Y: 200,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.to("#herobg", 2, {
      delay: 1.5,
      Y: 400,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  });

  return (
    <>
      <div className="flex flex-col w-100 p-[2em] space-between">
        <div className="flex font-bold tracking-wider  text-[15rem] justify-center">
          <h1 className="h1 relative">F</h1>
          <h1 className="h1 relative">L</h1>
          <h1 className="h1 relative">A</h1>
          <h1 className="h1 relative">U</h1>
        </div>
        <div
          id="herobg"
          className=" h-screen relative flex justify-center w-[100vw -4em]"
        >
          <div className="text-title w-3/4 text-neutral-50 z-20 absolute h-full flex flex-col justify-center  ">
            <h2 className="text-4xl font-semibold items-start py-8 tracking-widest">
              Story
            </h2>
            <p className="text-base leading-8 tracking-wider">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis at, nulla minima, deserunt exercitationem quibusdam,
              tempore nihil repellendus molestias eum neque temporibus et ab
              rem?
            </p>
          </div>

          <div className="bg-black absolute z-10 top-0 w-full h-full opacity-50 "></div>
          <img className="object-cover w-full h-full" src={background}></img>
        </div>
      </div>
    </>
  );
};
