import React, { useState, useContext } from "react";
import { ProfileContext, useStore } from "../store/ProfileContextProvider";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { updateUsername, username, fetchinng } = useContext(ProfileContext);

  return (
    <Profile
      onUpdateUsername={() => updateUsername(username)}
      name={username}
      fetching={false}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
