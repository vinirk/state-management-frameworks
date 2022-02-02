import React, { useState } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Profile from "./Profile";

import { profileAtom } from '../state';
import { useProfileActions, useAlertActions } from '../actions';

function ProfileContainer(props) {

  const profile = useRecoilValue(profileAtom);
  const profileActions = useProfileActions();
  const [username, setUsername] = useState("");

  console.log("profile", profile)
  return (
    <Profile
      onUpdateUsername={profileActions.update}
      username={username}
      setUsername={(value) => useSetRecoilState({
        ...profile,
        username: value
      })}
      fetching={props.fetching}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
