import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className="worth-seeing w-full bg-[#0d1117] rounded-md p-5 gap-5 col-span-full">
      <h2 className="text-center text-amber-50 font-black text-xl mb-5">{title}</h2>
      <div className="list grid 2xl:grid-cols-5 gap-x-5 sm:grid-cols-2 sm:grid-rows-auto">
        {list.map(({ id, name, image }) => (
          <Link
            key={id}
            className="item-wrapper h-auto flex flex-col items-center my-2 gap-y-2"
            to={`categories/${id}`}
          >
            <img src={image} alt={name} className="image h-auto object-cover" />
            <h3 className="title text-amber-50 xl:mb-0 sm:my-3 font-bold text-center">
              {name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
