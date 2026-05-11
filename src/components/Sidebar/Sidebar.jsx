import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar bg-[#0d1117] rounded-md p-5 text-amber-50 flex flex-col justify-between w-1/4 relative">
      <div className="title font-extrabold text-xl">CATEGORIES</div>
      <nav className="absolute top-17.5">
        <ul className="menu">
          <li>
            <NavLink to={`/categories/${0}`}>Link</NavLink>
          </li>
        </ul>
      </nav>

      <div className="footer text-[#888888] flex justify-between text-sm">
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
