import React from "react";

const UserFormInput = ({
  type,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <input
      className="border-none outline-none bg-neutral-800 rounded-md p-2 w-3/5"
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  );
};

export default UserFormInput;
