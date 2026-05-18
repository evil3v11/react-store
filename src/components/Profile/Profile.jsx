import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

import ProfileInput from "./ProfileInput";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    if (!currentUser) return;
    setFormData(currentUser);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((value) => !value);
    if (isEmpty) return;

    dispatch(updateUser(formData));
  };

  const handleChange = (e) => {
    const input = e.target;
    setFormData((prev) => {
      return { ...prev, [input.name]: input.value };
    });
  };

  return (
    <div className="user-profile h-100 bg-[#0d1117] text-amber-50 rounded-md flex flex-col p-5 gap-y-2 justify-around items-center">
      <h2>Update your information</h2>
      {currentUser ? (
        <form
          onSubmit={handleSubmit}
          method="post"
          className="space-y-3 w-2/5 flex flex-col items-center *:last:mt-5"
        >
          <ProfileInput
            type="email"
            name="email"
            id="email"
            placeholder="j0hnd0e@gmail.com"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
          <ProfileInput
            type="name"
            name="name"
            placeholder={"John Doe"}
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
          />
          <ProfileInput
            type="password"
            name="password"
            placeholder="Start typing..."
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
          <ProfileInput
            type="avatar"
            name="avatar"
            placeholder="Place a link to your avatar"
            autoComplete="off"
            value={formData.avatar}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-1/3 bg-indigo-700 hover:bg-indigo-800 hover:scale-110 transition-all cursor-pointer py-2 rounded-md"
          >
            Update
          </button>
        </form>
      ) : (
        <span>You have to login</span>
      )}
    </div>
  );
};

export default Profile;
