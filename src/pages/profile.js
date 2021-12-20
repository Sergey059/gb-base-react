import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";
import ProfileForm from "../components/ProfileForm";
import { togleVisibleProfile } from "../store/profile";

const ProfilePage = () => {
  const { isVisibleProfile, firstName, lastName, ...profile } = useSelector(
    (state) => {
      return state.profile;
    }
  );

  const dispatch = useDispatch();

  return (
    <Layout pageTitle="Profile Page">
      {isVisibleProfile && (
        <div>
          <h2>firstName: {firstName}</h2>
          <h2>lastName: {lastName}</h2>
          <h2>phone: {profile.phone}</h2>
        </div>
      )}

      <button onClick={() => dispatch(togleVisibleProfile())}>
        togleVisibleProfile
      </button>

      <ProfileForm firstName={firstName} lastName={lastName} {...profile} />
    </Layout>
  );
};

export default ProfilePage;
