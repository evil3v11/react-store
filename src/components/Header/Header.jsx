import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

import Avatar from "../../images/avatar.png";
import { CART_ICON, FAVORITES, MAIN_LOGO, MENU_SVG } from "../../utils/svg";
import { SCROLLBAR } from "../../utils/constants";
import { CircularProgress } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, cart } = useSelector(({ user }) => user);
  const [userData, setUserData] = useState({
    name: currentUser?.name,
    avatar: currentUser?.avatar,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { data, isLoading } = useGetProductsQuery({ title: query });
  useEffect(() => {
    if (!currentUser) return;
    setUserData(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header h-15 sm:w-full lg:w-4/5 sm:px-5 flex justify-between items-center md:px-10 bg-neutral-800 text-gray-300 pt-2 -mb-10">
      <div className="flex items-center gap-x-2 relative">
        <Link to={ROUTES.HOME}>{MAIN_LOGO}</Link>
        <div
          className="categories w-7 h-7 z-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          {MENU_SVG}
        </div>
        <Sidebar isOpen={isOpen} />
      </div>

      <div
        className="info flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="user w-8 mr-2">
          <img src={userData.avatar ?? Avatar} alt="Profile Avatar" />
        </div>
        <div className="username">{userData.name ?? "Guest"}</div>
      </div>

      <form className="form relative mx-1">
        <div className="form-icon"></div>
        <input
          className="w-75 focus:outline-none bg-[#0d1117] p-2 rounded-xl"
          type="search"
          name="search"
          placeholder="&#128269; Search for anything..."
          autoComplete="off"
          value={query}
          onChange={handleSearch}
        />
        {query && (
          <div
            className={`box h-auto max-h-75 w-full bg-[#666] p-3 absolute z-5 rounded-md overflow-y-auto ${SCROLLBAR}`}
          >
            <p>{data?.length} items found</p>
            {isLoading ? (
              <CircularProgress />
            ) : (
              data?.map(({ title, images, id }) => (
                <Link
                  key={id}
                  to={`/products/${id}`}
                  className="flex gap-5 my-3 items-center"
                  onClick={() => setQuery("")}
                >
                  <img className="max-w-1/3" src={images[0]} alt={title} />
                  {title}
                </Link>
              ))
            )}
          </div>
        )}
      </form>

      <div className="favorites flex justify-between gap-3">
        <Link to={ROUTES.HOME} className="favorites w-7 h-7">
          {FAVORITES}
        </Link>
        <Link to={ROUTES.CART} className="cart w-7 h-7 relative">
          {CART_ICON}
          {!!cart.length && (
            <span className="count bg-indigo-700 inline-flex justify-center items-center size-4 text-xs rounded-full absolute -top-2 -right-2">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
