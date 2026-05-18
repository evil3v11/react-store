import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../utils/routes";
import { toggleForm } from "../../features/user/userSlice";

import Avatar from "../../images/avatar.png";
import { CART_ICON, FAVORITES, MAIN_LOGO } from "../../utils/svg";

const Header = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const [userData, setUserData] = useState({
    name: currentUser?.name,
    avatar: currentUser?.avatar,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) return;
    setUserData(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  return (
    <div className="header h-15 sm:w-full lg:w-4/5 sm:px-5 flex justify-between items-center md:px-10 bg-neutral-800 text-gray-300 pt-2 -mb-10">
      <Link to={ROUTES.HOME}>{MAIN_LOGO}</Link>

      <div
        className="info flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="user w-8 mr-2">
          <img src={userData.avatar ?? Avatar} alt="Profile Avatar" />
        </div>
        <div className="username">{userData.name ?? "Guest"}</div>
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
            // value={}
            onChange={() => {}}
          />
        </div>
        <div className="box"></div>
      </form>

      <div className="favorites flex flex-row gap-5">
        <Link to={ROUTES.HOME} className="favorites w-7 h-7">
          {FAVORITES}
        </Link>
        <Link to={ROUTES.CART} className="cart w-7 h-7 relative">
          {CART_ICON}
          <span className="count bg-indigo-700 inline-flex justify-center items-center size-4 text-xs rounded-full absolute -top-2 -right-2">
            2
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
