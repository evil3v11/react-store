import React from "react";

const CategorySearchForm = ({
  title,
  price_min,
  price_max,
  onSumbit,
  onChange,
}) => {
  return (
    <form
      method="post"
      onSubmit={onSumbit}
      className="w-full bg-[#0d1117] rounded-md p-5 gap-5 col-span-full "
    >
      <input
        className="bg-[#666] p-2 mx-3 rounded-md"
        type="text"
        name="title"
        placeholder="&#127991; Filter products by title"
        value={title}
        onChange={onChange}
      />

      <input
        className="bg-[#666] p-2 mx-3 rounded-md"
        type="number"
        name="price_min"
        placeholder="Price from"
        value={price_min}
        onChange={onChange}
        min="0"
      />

      <input
        className="bg-[#666] p-2 mx-3 rounded-md"
        type="number"
        name="price_max"
        placeholder="Price up to"
        value={price_max}
        onChange={onChange}
        min="0"
      />
      <button type="submit" hidden />
    </form>
  );
};

export default CategorySearchForm;
