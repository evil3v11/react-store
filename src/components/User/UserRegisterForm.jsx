import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import UserFormInput from "./UserFormInput";
import UserFormHeading from "./UserFormHeading";
import UserFormInputError from "./UserFormInputError";
import UserFormCloseButton from "./UserFormCloseButton";
import UserFormActionButton from "./UserFormActionButton";
import UserFormChanger from "./UserFormChanger";

const UserRegisterForm = ({ closeForm, handleFormType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    avatar: false,
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

    dispatch(createUser(formData));
    closeForm();
  };

  return (
    <div className="user-register-form h-100 w-100 bg-[#0d1117] text-amber-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform- flex flex-col justify-evenly items-center gap-5 p-5 rounded-lg z-2">
      <UserFormCloseButton onClick={closeForm} />
      <UserFormHeading>Register</UserFormHeading>
      <form
        action="post"
        onSubmit={handleSubmit}
        className="register-form flex flex-col h-full w-full justify-around items-center"
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
          type="text"
          name="name"
          placeholder="Your name"
          autoComplete="off"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.name ? (
          <UserFormInputError>Invalid name</UserFormInputError>
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

        <UserFormInput
          type="avatar"
          name="avatar"
          placeholder="Your avatar"
          autoComplete="off"
          value={formData.avatar}
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.avatar ? (
          <UserFormInputError>Invalid avatar</UserFormInputError>
        ) : (
          ""
        )}

        <UserFormChanger onClick={() => handleFormType("login")}>
          Already have an account?
        </UserFormChanger>

        <UserFormActionButton>Register</UserFormActionButton>
      </form>
    </div>
  );
};

export default UserRegisterForm;
