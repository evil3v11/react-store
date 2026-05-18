import React from "react";

const UserFormInputError = ({ children }) => {
  return (
    <span className="text-red-600 absolute -right-25 top-2">{children}</span>
  );
};

export default UserFormInputError;
