import React, { useContext } from "react";
import { ProfileContext } from "../store/ProfileContextProvider";
import Profile from "./Profile";

function ProfileContainer() {

  const { updateUsername, username, fetching, message } = useContext(ProfileContext);

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
