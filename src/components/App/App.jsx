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
import UserForm from "../User/UserForm.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen w-full font-[roboto] flex flex-col justify-center items-center gap-15 px-5 relative">
      <Header />
      <UserForm />
      <main className="flex-1 lg:w-4/5 sm:w-full h-full grid lg:grid-cols-[20%_1fr] sm:grid-cols-1 grid-rows-auto gap-5">
        <Sidebar />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
