import React from "react";
import { atom, useRecoilState } from "recoil";
import Profile from "./Profile";

const profileState = atom({
  key: "profileState",
  default: {
    username: '',
    fetching: false,
    message: null,
  }
});

function ProfileContainer(props) {

  const [username, setUsername] = useRecoilState(profileState);
  const [fetching, setFetching] = useRecoilState(profileState);

  const updateUserName = (username) => {
    setUsername({ username });
  };

  return (
    <Profile
      onUpdateUsername={updateUserName}
      username={username}
      setUsername={setUsername}
      fetching={props.fetching}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
