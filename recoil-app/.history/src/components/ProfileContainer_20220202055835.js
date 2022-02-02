import React, { useState } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Profile from "./Profile";

import { profileAtom } from '../state';
import { useProfileActions, useAlertActions } from '../actions';

function ProfileContainer(props) {

  const profile = useRecoilValue(profileAtom);
  const setProfileState = useSetRecoilState(profileAtom);
  const profileActions = useProfileActions();

  console.log("profile", profile)
  return (
    <Profile
      onUpdateUsername={profileActions.update}
      username={profile.username}
      setUsername={(value) => setProfileState({
        username: value
      })}
      fetching={profile.fetching}
      message={profile.message}
      error={profile.error}
    />
  );
}

export default ProfileContainer;
