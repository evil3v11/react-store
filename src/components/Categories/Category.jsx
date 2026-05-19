import React, { useEffect, useEffectEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../features/api/apiSlice";

import { ROUTES } from "../../utils/routes";

import { CircularProgress } from "@mui/material";
import Products from "../Products/Products";
import CategorySearchForm from "./CategorySearchForm";
import CategorySearchButton from "./CategorySearchButton";

const filterParams = {
  title: "",
  price_min: "1",
  price_max: "",
};

const queryParams = {
  categoryId: "",
  offset: 0,
  limit: 5,
  ...filterParams,
};

const Category = () => {
  const [query, setQuery] = useState(queryParams);
  const [filters, setFilters] = useState(filterParams);
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [hasEnded, setHasEnded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { list } = useSelector(({ categories }) => categories);
  const { data, isLoading, isSuccess } = useGetProductsQuery(query);

  console.log()
  
  useEffect(() => {
    if (!id) {
      navigate(ROUTES.HOME);
    }

    setFilters(filterParams);
    setItems([]);
    setHasEnded(false);
    setQuery((prev) => {
      return { ...prev, categoryId: id, offset: 0 };
    });

    if (!id || !list.length) return;
    const category = list.find((item) => item.id === Number(id));
    setCategory(category?.name);
  }, [id]);

  const handleFilter = (e) => {
    const currentInput = e.target;
    setFilters((prev) => {
      return { ...prev, [currentInput.name]: currentInput.value };
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setItems([]);
    setHasEnded(false);
    setFilters(queryParams);
    setQuery((prev) => {
      return { ...queryParams, ...filters };
    });
  };

  useEffect(() => {
    if (isLoading) return;
    setItems((prev) => [...prev, ...data]);
    if (query.offset > items.length) setHasEnded(true);
  }, [data]);

  const handleLoadMore = () => {
    setQuery((prev) => {
      return { ...prev, offset: prev.offset + prev.limit };
    });
  };

  // const handleReset = () => {
  //   setItems([]);
  //   setHasEnded(false);
  //   setFilters(queryParams);
  //   setQuery((prev) => {
  //     return { ...queryParams, ...filters };
  //   });
  // };

  return (
    <section className="space-y-5 flex flex-col items-center">
      <CategorySearchForm
        title={filters.title}
        price_min={filters.price_min}
        price_max={filters.price_max}
        onSumbit={handleSumbit}
        onChange={handleFilter}
      />
      {isLoading ? (
        <div className="flex justify-center m-5">
          <CircularProgress />
        </div>
      ) : !isSuccess || !items.length ? (
        <div className="flex flex-col justify-center gap-5 text-amber-50 text-center">
          <span>No results</span>
          <CategorySearchButton>Reset</CategorySearchButton>
        </div>
      ) : (
        <Products title={category} products={items} amount={items.length} />
      )}
      {!hasEnded  && (
        <CategorySearchButton onClick={handleLoadMore}>
          Load more
        </CategorySearchButton>
      )}
    </section>
  );
};

export default Category;
