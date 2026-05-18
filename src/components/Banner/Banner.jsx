import { Button } from "@mui/material";
import React from "react";
import Sneakers from "../../images/sneaker.png";
import Handheld from "../../images/handheld.png";
import Frog from "../../images/Frog.webp";

const Banner = () => {
  return (
    <section className="banner flex h-100 w-full rounded-md col-span-full">
      <div className="left bg-[#0d1117] relative w-[50%] h-auto p-5 text-indigo-800 text-center flex flex-col justify-around items-center gap-y-5">
        <p className="banner-content text-7xl font-extralight">
          NEW YEAR<span className="block text-[9.5rem] font-light">SALE</span>
        </p>
        <img
          src={Sneakers}
          alt="Sneakers"
          loading="lazy"
          className="h-1/2 absolute -left-10 -bottom-3 rotate-45"
        />
        <img
          src={Handheld}
          alt="Handheld console"
          loading="lazy"
          className="h-2/5 absolute -right-10 -bottom-5 -rotate-45"
        />
        <Button className="more" variant="contained" color="secondary">
          See more
        </Button>
      </div>

      <div className="right bg-amber-50 w-[50%] h-auto p-5 flex flex-col justify-around items-center">
        <img
          src={Frog}
          loading="lazy"
          alt="Froggy"
          className="object-cover h-[90%]"
        />
        <p className="new-years-discount-price text-[1.2rem]">
          save up to <span className="text-indigo-800 font-bold">50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
