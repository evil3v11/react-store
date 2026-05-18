import React from "react";

const UserFormActionButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-indigo-800 text-amber-50 py-1.5 px-5 rounded-lg font-bold cursor-pointer"
    >
      {children}
    </button>
  );
};

export default UserFormActionButton;
