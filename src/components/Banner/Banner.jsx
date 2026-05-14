import { Button } from "@mui/material";
import React from "react";
import Sneakers from "../../images/sneaker.png";
import Handheld from "../../images/handheld.png";

const Banner = () => {
  return (
    <section className="banner flex w-full p-0 h-100 rounded-md">
      <div className="left bg-[#0d1117] w-[50%] relative h-auto p-5 text-indigo-800 text-center flex flex-col justify-center items-center gap-y-5">
        <p className="banner-content text-7xl font-extralight">
          NEW YEAR<span className="block text-[9.5rem] font-light">SALE</span>
        </p>
        <img src={Sneakers} alt="Sneakers" className="h-1/2 absolute -left-10 -bottom-3 rotate-45" />
        <img src={Handheld} alt="Handheld console" className="h-2/5 absolute -right-10 -bottom-5 -rotate-45" />
        <Button className="more" variant="contained" color="secondary">
          See more
        </Button>
      </div>

      <div className="right bg-amber-50 w-[50%] h-auto p-5">
        <img src={null} alt="" className="" />
        <p className="new-years-discount-price">
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
