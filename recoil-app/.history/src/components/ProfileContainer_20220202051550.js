import React from "react";
import { atom, useRecoilState } from "recoil";
import Profile from "./Profile";

const profileState = atom({
  key: "profileState",
  default: ""
});

function ProfileContainer(props) {

  const [name, setName] = useRecoilState(profileState);

  return (
    <Profile
      onUpdateUsername={props.updateUsername}
      name={props.name}
      fetching={props.fetching}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
