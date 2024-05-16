import { Instagram } from "lucide-react";
import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className="py-2 justify-center flex text-color">
        <div className="w-3/4 flex justify-between">
          <div className="text-[#b6a593] hover:text-neutral-950 ">
            <Instagram />
          </div>
          <h1
            className="text-2xl font-light tracking-widest text-[#b6a593]
          hover:text-neutral-950 cursor-pointer"
          >
            F L A U
          </h1>
          <div className="text-[#b6a593] hover:text-neutral-950 ">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
