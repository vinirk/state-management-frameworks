import React, { useState } from "react";
import { useStore } from "../store/store";
import { updateUsername } from '../store/profileReducer';
import Profile from "./Profile";

function ProfileContainer(props) {

  const [, dispatch] = useStore();
  const [username, setUsername] = useState("");

  return (
    <Profile
      onUpdateUsername={() => dispatch(updateUsername(username))}
      name={username}
      setUsername={setUsername}
      fetching={props.fetching}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
