import React, { useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
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
      username={profile}
      setUsername={setUsername}
      fetching={props.fetching}
      message={props.message}
      error={props.error}
    />
  );
}

export default ProfileContainer;
