import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateProfile } from "../../store/profile";
import "./profile-form.sass";

const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });
  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div className="profile-page">
      <h1>Edit profile</h1>

      <div className="profile__form">
        <input
          placeholder="First name..."
          value={form.firstName}
          data-name="firstName"
          onChange={handleChangeForm}
        />
        <input
          placeholder="Last name..."
          value={form.lastName}
          data-name="lastName"
          onChange={handleChangeForm}
        />
        <input
          placeholder="Phone..."
          value={form.phone}
          data-name="phone"
          onChange={handleChangeForm}
        />

        <button onClick={() => dispatch(updateProfile(form))}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
