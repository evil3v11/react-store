import React from "react";
import { CLOSE_BTN } from "../../utils/svg";

const UserFormCloseButton = ({ onClick }) => {
  return (
    <div
      className="login-form-close-btn w-10 absolute right-0 top-0 m-2 cursor-pointer"
      onClick={onClick}
    >
      {CLOSE_BTN}
    </div>
  );
};

export default UserFormCloseButton;
