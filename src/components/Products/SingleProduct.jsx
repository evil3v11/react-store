import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import { getRelatedProducts } from "../../features/products/productsSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    products: { related },
  } = useSelector((state) => state);
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
