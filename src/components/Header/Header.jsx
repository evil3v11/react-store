import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Avatar from "../../images/avatar.png";
import Logo from "../../images/logo.png";
import Favorites from "../../images/favorites.svg";

const Header = () => {
  return (
    <div className="header h-15 sm:w-full lg:w-4/5 sm:px-5 flex justify-between items-center md:px-10 bg-neutral-800 text-gray-300 pt-2 -mb-10">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <svg
            className="w-15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="rgb(136, 136, 136)"
              d="M320 462.8C308.2 467.9 296.6 472.5 285.1 476.3C301.8 510.1 316.1 512 320 512C323.9 512 338.1 510.1 354.9 476.3C343.5 472.4 331.8 467.9 320 462.8zM510 320C543 365.2 554.3 410.9 533.6 448C513.4 484.3 471.1 497.3 418.4 491.2C396.4 543.3 362.7 576 320 576C277.3 576 243.6 543.3 221.6 491.2C168.9 497.3 126.6 484.3 106.4 448C85.7 410.9 97 365.2 130 320C97 274.8 85.7 229.1 106.4 192C126.6 155.7 168.9 142.7 221.6 148.8C243.6 96.7 277.2 64 320 64C362.8 64 396.4 96.7 418.4 148.8C471.1 142.7 513.4 155.6 533.6 192C554.3 229.1 543 274.8 510 320zM444.2 387.4C442.5 401.6 440.3 415.4 437.5 428.6C469.3 430 476.1 419.9 477.7 416.9C480 412.7 484.7 399 465.8 368.8C459 375.1 451.8 381.3 444.2 387.4zM437.5 211.5C440.3 224.6 442.5 238.4 444.2 252.7C451.8 258.8 459 265 465.8 271.3C484.7 241.1 480 227.3 477.7 223.2C476.1 220.3 469.3 210.2 437.5 211.5zM354.9 163.7C338.1 129.9 323.9 128 320 128C316.1 128 301.9 129.9 285.1 163.7C296.5 167.6 308.2 172.1 320 177.2C331.8 172.1 343.4 167.5 354.9 163.7zM195.9 252.6C197.6 238.3 199.8 224.6 202.6 211.4C170.8 210 164 220.1 162.4 223.1C160.1 227.3 155.4 241 174.3 271.2C181.1 264.9 188.3 258.7 195.9 252.6zM174.2 368.8C155.3 399 160 412.8 162.3 416.9C163.9 419.8 170.7 429.9 202.5 428.6C199.7 415.5 197.5 401.7 195.8 387.4C188.2 381.3 181 375.1 174.2 368.8zM400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400C364.2 400 400 364.2 400 320zM320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320C288 302.3 302.3 288 320 288z"
            />
          </svg>
        </Link>
      </div>

      <div className="info flex justify-center items-center">
        <div className="user w-8 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="rgb(136, 136, 136)"
              d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
            />
          </svg>{" "}
        </div>
        <div className="username ">Guest</div>
      </div>

      <form className="form">
        <div className="form-icon"></div>

        <div className="input text-gray-300 p-2">
          <input
            className="w-xs focus:outline-none bg-[#0d1117] p-2 rounded-xl"
            type="search"
            name="search"
            placeholder="&#128269; Search for anything..."
            autoComplete="off"
            onChange={() => {}}
            // value={}
          />
        </div>

        <div className="box"></div>
      </form>

      <div className="account flex flex-row gap-5">
        <Link to={ROUTES.HOME} className="favorites w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="rgb(136, 136, 136)"
              d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"
            />
          </svg>
        </Link>

        <Link to={ROUTES.CART} className="cart w-7 h-7 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="rgb(136, 136, 136)"
              d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"
            />
          </svg>
          <span className="count bg-indigo-700 inline-flex justify-center items-center size-4 text-xs rounded-full absolute -top-2 -right-2">
            2
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
