import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../features/user/userSlice";

import { CART_MINUS, CART_PLUS, CLOSE_BTN } from "../../utils/svg";
import { SCROLLBAR } from "../../utils/constants";
import { sumPrice } from "../../utils/common";
import Products from "../Products/Products";

const Cart = () => {
  const { cart, related } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handleItemQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const handleItemRemoval = (item) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <section className="bg-[#0d1117] text-[#999] rounded-md p-5 gap-5 col-span-full flex flex-col">
      <h2 className="title text-4xl">Cart</h2>
      {!cart.length ? (
        <div className="empty">Cart is empty</div>
      ) : (
        <>
          <div
            className={`cart h-100 space-y-5 overflow-y-auto sm:${SCROLLBAR}`}
          >
            {cart.map((item) => {
              const { id, title, category, price, quantity, images } = item;
              return (
                <div
                  key={id}
                  className={`grid grid-cols-[50%_1fr_1fr_1fr_auto] items-center w-full bg-[#262626] rounded-md p-5`}
                >
                  <div className="flex items-center gap-5">
                    <Link to={`/products/${id}`}>
                      <img
                        src={images[0]}
                        alt={title}
                        className="min-w-20 max-w-30 rounded-md object-cover hover:scale-110 transition-transform"
                      />
                    </Link>

                    <div className="info flex flex-col gap-y-2">
                      <h3>{title}</h3>
                      <p className="text-xs">{category.name}</p>
                    </div>
                  </div>

                  <p className="price flex justify-center text-lg">{price}$</p>

                  <div className="quantity flex justify-center gap-2">
                    <div
                      className="w-6 cursor-pointer rounded-md bg-gray-700 hover:bg-gray-800"
                      onClick={() =>
                        handleItemQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      {CART_MINUS}
                    </div>
                    <span className="">{quantity}</span>
                    <div
                      className="w-6 cursor-pointer rounded-md bg-indigo-700 hover:bg-indigo-800"
                      onClick={() =>
                        handleItemQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      {CART_PLUS}
                    </div>
                  </div>

                  <p className="price text-center text-3xl text-indigo-700 font-bold">
                    {price * quantity}$
                  </p>

                  <div
                    className="close-btn w-7 cursor-pointer hover:rotate-90 hover:transition-transform"
                    onClick={() => handleItemRemoval(item)}
                  >
                    {CLOSE_BTN}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="actions flex justify-between">
            <div className="total-price text-4xl">
              Total price:{" "}
              <span>
                {sumPrice(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>
            <button className="bg-indigo-700 hover:bg-indigo-800 px-5 py-2 rounded-md cursor-pointer text-[#ccc]">
              Proceed to checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
