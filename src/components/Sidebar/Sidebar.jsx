import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import { SCROLLBAR } from "../../utils/constants";

const Sidebar = ({ isOpen }) => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section
      className={`sidebar h-100 w-75 ${isOpen ? "visible opacity-100 transition-all duration-300 ease-in-out" : "invisible opacity-0 transition-all duration-300 ease-in-out"} absolute top-12 left-10 bg-[#333]/99 rounded-md p-5 text-amber-50 flex flex-col justify-between gap-10 z-2`}
    >
      <div className="title font-extrabold text-xl text-[#ccc]">CATEGORIES</div>
      <nav className={` overflow-y-auto ${SCROLLBAR} `}>
        <ul className="menu space-y-2 text-sm">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "active: text-indigo-800 hover:text-amber-50" : "text-[#888888] hover:text-amber-50"}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer text-[#888888] flex justify-between sm:flex-col xl:flex-row text-sm xl:gap-5">
        <a href="/help" target="_blank" className="link ">
          Help
        </a>
        <a href="/terms" target="_blank" className="link underline">
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
