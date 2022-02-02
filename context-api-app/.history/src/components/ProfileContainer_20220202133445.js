import React, { useState, useContext } from "react";
import { ProfileContext, useStore } from "../store/ProfileContextProvider";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { updateUsername } = useContext(ProfileContext);
  const [username, setUsername] = useState("");

  return (
    <Profile
      onUpdateUsername={() => updateUsername(username)}
      username={username}
      setUsername={setUsername}
      fetching={false}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
