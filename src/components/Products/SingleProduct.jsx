import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../features/products/productsSlice";
import { useGetProductQuery } from "../../features/api/apiSlice";

import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import { CircularProgress } from "@mui/material";
import Product from "./Product";
import Products from "./Products";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products: { related } } = useSelector((state) => state);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess]);

  useEffect(() => {
    dispatch(getRelatedProducts(data?.category?.id));
  }, [data, dispatch]);

  return data ? (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Similar products" />
    </>
  ) : (
    <div className="spinner flex flex-col justify-center items-center col-span-full text-taupe-50 gap-y-3">
      <CircularProgress />
      Loading...
    </div>
  );
};

export default SingleProduct;
