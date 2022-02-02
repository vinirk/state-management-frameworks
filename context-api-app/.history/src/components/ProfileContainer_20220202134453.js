import React, { useContext } from "react";
import { ProfileContext } from "../store/ProfileContextProvider";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { updateUsername, username, fetching, message } = useContext(ProfileContext);

  console.log(username, fetching, message, 'updated');
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
