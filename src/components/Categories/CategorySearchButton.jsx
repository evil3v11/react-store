import React from "react";

const CategorySearchButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-700 hover:bg-indigo-800 py-2 px-5 rounded-md text-amber-100 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default CategorySearchButton;
