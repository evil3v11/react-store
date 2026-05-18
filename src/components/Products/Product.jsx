import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import {
  addItemToCart,
  addItemToFavorites,
} from "../../features/user/userSlice";
import { SIDEBAR } from "../../utils/constants";

const randomShoeSizes = [4, 5, 6];

const Product = (item) => {
  const { title, images, price, description } = item;
  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  const addToFavorites = () => {
    dispatch(addItemToFavorites(item));
  };

  return (
    <div className="product bg-[#0d1117] rounded-md col-span-auto grid grid-cols-[2fr_1fr_2fr] grid-row-1 p-5 gap-5">
      <img
        src={currentImage}
        alt={title}
        loading="lazy"
        className="rounded-md object-cover"
      />

      <div className={`rounded-md overflow-y-auto h-109 ${SIDEBAR}`}>
        <div className="space-y-2">
          {images.map((image, i) => (
            <img
              key={i}
              className="rounded-md object-cover cursor-pointer h-50"
              src={image}
              onClick={() => setCurrentImage(image)}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="info h-full flex flex-col justify-around text-amber-50 gap-y-5">
        <h1 className="product-title">{title}</h1>
        <div className="product-price font-bold text-2xl">{price}$</div>
        <div className="product-color">
          <span className="text-[#888] mr-1">Color:</span> Green
        </div>
        <div className="product-sizes flex gap-x-2">
          <span className="text-[#888]">Sizes: </span>
          <div className="list flex gap-x-2">
            {randomShoeSizes.map((size, i) => (
              <div
                key={`size-${size}`}
                style={{
                  height: "auto",
                  width: "auto",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "10px",
                  padding: "1px 15px",
                }}
                className={currentSize === size ? "bg-indigo-800" : "bg-[#333]"}
                onClick={() => setCurrentSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className="description text-[#777]">{description}</p>

        <div className="actions flex gap-x-3">
          <button
            className="product-add-btn cursor-pointer bg-indigo-800 hover:bg-indigo-700 text-white text-[1.05rem] rounded-md font-bold py-2 px-5 disabled:text-zinc-400 disabled:cursor-not-allowed disalbed:opacity-60"
            disabled={!currentSize}
            onClick={addToCart}
          >
            Add to card
          </button>
          <button
            className="product-add-favorites cursor-pointer bg-[#888] hover:bg-[#999] text-white text-[1.05rem] rounded-md font-bold py-2 px-5"
            onClick={addToFavorites}
          >
            Add to favourites
          </button>
        </div>

        <div className="product-additional-information flex justify-between items-end text-xs">
          <div className="bottom text-[#555]">
            {Math.floor(Math.random() * 100)} purchased
          </div>
          <Link to={ROUTES.HOME} className="text-white">
            Return to store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
