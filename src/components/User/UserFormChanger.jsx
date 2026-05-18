import React from "react";

const UserFormChanger = ({ onClick, children }) => {
  return (
    <div className="link cursor-pointer text-[#666]" onClick={onClick}>
      {children}
    </div>
  );
};

export default UserFormChanger;
