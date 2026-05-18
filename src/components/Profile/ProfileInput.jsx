import React from "react";

const ProfileInput = ({
  type,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <input
      className="border-none outline-none bg-neutral-800 rounded-md p-2 w-full"
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  );
};

export default ProfileInput;
