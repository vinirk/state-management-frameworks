import React, { useState } from "react";
import { useStore } from "../store/store";
import { updateUsername } from '../store/profileReducer';
import Profile from "./Profile";

function ProfileContainer(props) {

  const [state, dispatch] = useStore();
  const [username, setUsername] = useState("");

  console.log(state, 'state', username)

  return (
    <Profile
      onUpdateUsername={() => dispatch(updateUsername(username))}
      name={username}
      setUsername={setUsername}
      fetching={false}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
