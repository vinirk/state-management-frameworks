import React, { useState, useContext } from "react";
import { ProfileContext, useStore } from "../store/ProfileContextProvider";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { updateUsername, username, fetching, message } = useContext(ProfileContext);

  console.log(username, fetching, message)
  return (
    <Profile
      onUpdateUsername={updateUsername}
      name={username}
      fetching={fetching}
      message={message}
    />
  );
}

export default ProfileContainer;
