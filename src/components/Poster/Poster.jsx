import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import MacBook from "../../images/macbook-pro.webp";

const Poster = () => {
  return (
    <Stack className="h-100 w-full bg-[#0d1117] rounded-md p-10 relative flex justify-between col-span-full">
      <div className="title w-full text-7xl 2xl:text-9xl font-black font-anton text-indigo-800">
        BIG SALE 20%
      </div>
      <div className="product relative flex justify-between w-full">
        <div className="text flex flex-col justify-end">
          <div className="subtitle text-[#666666] font-medium">
            BESTSELLERS OF 2026
          </div>
          <h1 className="head xl:text-3xl text-amber-50 font-black max-w-[10em]">
            LENNON R2D2 WITH NVIDIA 5090 TI
          </h1>
          <Button
            variant="contained"
            style={{
              backgroundColor: "oklch(45.7% 0.24 277.023)",
              marginTop: "15px",
              width: "150px",
              cursor: "pointer",
            }}
          >
            Shop now
          </Button>
        </div>
        <img
          className="h-50 object-cover relative -right-20 top-10 z-1"
          src={MacBook}
          loading="lazy"
          alt="Poster"
        />
      </div>
    </Stack>
  );
};

export default Poster;
