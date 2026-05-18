import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => {
    dispatch(toggleForm(false));
    dispatch(toggleFormType("register"));
  };
  const handleFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div
        className="login-form-overlay z-1 fixed top-0 left-0 w-screen h-screen bg-black/50"
        onClick={closeForm}
      />
      {formType === "register" ? (
        <UserRegisterForm
          handleFormType={handleFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm handleFormType={handleFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
