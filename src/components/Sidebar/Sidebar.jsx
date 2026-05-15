import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  let visibleCategories = 5;
  return (
    <section className="sidebar h-full invisible absolute lg:visible lg:relative bg-[#0d1117] rounded-md p-5 text-amber-50 flex flex-col justify-between">
      <div className="title font-extrabold text-xl">CATEGORIES</div>
      <nav className="absolute top-17.5">
        <ul className="menu">
          {list.slice(0, visibleCategories).map(({ id, name }) => (
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
