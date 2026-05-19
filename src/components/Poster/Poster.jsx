import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import MacBook from "../../images/macbook-pro.webp";

const Poster = () => {
  return (
    <Stack className="h-100 w-full bg-[#0d1117] rounded-md p-10 relative flex justify-between col-span-full">
      <div className="title w-full sm:text-[4.1rem] lg:mb-10 xl:mb-0 xl:text-[3.7rem] 2xl:text-[4.6rem] font-black font-anton -mt-10 text-indigo-800">
        BIG SALE 20%
      </div>
      <div className="product">
        <div className="text">
          <div className="subtitle text-[#666666] font-medium">
            BESTSELLERS OF 2026
          </div>
          <h1 className="head -mt-1 sm:text-[2.5rem] lg:text-[1.5rem] xl:text-[2rem] text-amber-50 font-black max-w-[10em]">
            LENNON R2D2 WITH NVIDIA 5090 TI
          </h1>
          <Button
            variant="contained"
            style={{
              backgroundColor: "oklch(45.7% 0.24 277.023)",
              marginTop: "15px",
            }}
          >
            Shop now
          </Button>
        </div>
        <div className="image">
          <img
            className="max-w-2/5 absolute -right-7 top-36 md:top-25 md:-right-5 lg:top-40 xl:top-20 xl:-right-25 z-1"
            src={MacBook}
            loading="lazy"
            alt="Poster"
          />
        </div>
      </div>
    </Stack>
  );
};

export default Poster;
