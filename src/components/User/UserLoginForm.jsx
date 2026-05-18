import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import UserFormActionButton from "./UserFormActionButton";
import UserFormInput from "./UserFormInput";
import UserFormHeading from "./UserFormHeading";
import UserFormInputError from "./UserFormInputError";
import UserFormCloseButton from "./UserFormCloseButton";
import UserFormChanger from "./UserFormChanger";

const UserLoginForm = ({ closeForm, handleFormType }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const input = e.target;

    if (!input.value) {
      setErrors((prev) => {
        return { ...prev, [input.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [input.name]: false };
      });
    }

    setFormData((prev) => {
      return { ...prev, [input.name]: input.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((value) => !value);
    if (isEmpty) return;

    dispatch(loginUser(formData));
    closeForm();
  };

  return (
    <div className="user-login-form h-75 w-100 bg-[#0d1117] text-amber-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-5 rounded-lg z-2">
      <UserFormCloseButton onClick={closeForm} />
      <UserFormHeading>Log in</UserFormHeading>
      <form
        action="post"
        onSubmit={handleSubmit}
        className="login-form flex flex-col h-full w-full justify-evenly items-center"
      >
        <UserFormInput
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="off"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.email ? (
          <UserFormInputError>Invalid email</UserFormInputError>
        ) : (
          ""
        )}
        <UserFormInput
          type="password"
          name="password"
          placeholder="Your password"
          autoComplete="off"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.password ? (
          <UserFormInputError>Invalid password</UserFormInputError>
        ) : (
          ""
        )}
        <UserFormChanger onClick={() => handleFormType("register")}>
          Create an account
        </UserFormChanger>
        <UserFormActionButton>Log in</UserFormActionButton>
      </form>
    </div>
  );
};

export default UserLoginForm;
