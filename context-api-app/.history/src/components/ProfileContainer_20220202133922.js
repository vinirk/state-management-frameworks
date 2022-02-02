import React, { useState, useContext } from "react";
import { ProfileContext, useStore } from "../store/ProfileContextProvider";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { updateUsername, username, fetching } = useContext(ProfileContext);

  return (
    <Profile
      onUpdateUsername={() => updateUsername(username)}
      name={username}
      fetching={fetching}
      message={props.message}
    />
  );
}

export default ProfileContainer;
