import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes/Routes.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { getCategories } from "../../features/categories/categoriesSlice.js";
import { getProducts } from "../../features/products/productsSlice.js";
import Poster from "../Poster/Poster.jsx";
import { Stack } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-neutral-800 h-auto w-full font-[roboto] flex flex-col items-center gap-15 px-5">
      <Header />
      <div className="lg:w-4/5 sm:w-full h-auto grid lg:grid-cols-[25%_1fr] sm:grid-cols-1 grid-rows-auto gap-5 -mb-10 ">
        <Sidebar />
        <Poster />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
