import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <Stack className="products w-full bg-[#0d1117] rounded-md p-5 gap-5 col-span-full">
      {title && (
        <h2 className="text-center text-amber-50 font-black text-xl">
          {title}
        </h2>
      )}
      <div className="list grid 2xl:grid-cols-5 sm:grid-cols-2 sm:grid-rows-auto gap-x-5">
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link
            key={id}
            to={`/products/${id}`}
            className="product bg-neutral-800 sm:my-5"
          >
            <img
              className="image h-auto w-full object-cover sm:object-cover"
              src={images[0]}
            />

            <div className="wrapper h-auto relative flex flex-col justify-between p-3 gap-y-5">
              <div>
                <h3 className="title text-amber-50 font-bold">{title}</h3>
                <div className="product-category text-[#999999] text-sm">{cat.toUpperCase()}</div>
              </div>

              <div className="product-info">
                <div className="prices flex items-end sm: gap-1">
                  <div className="price text-indigo-800 text-2xl font-bold">
                    {price}$
                  </div>
                  {price && (
                    <div className="old-price line-through text-[#888888]">
                      {Math.floor(price * 1.2)}$
                    </div>
                  )}
                </div>
              </div>

              <div className="purchases text-[#888888] absolute bottom-3 right-3">
                {Math.floor(Math.random() * 20 + 1)} bought
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Stack>
  );
};

export default Products;
