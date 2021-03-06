import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Profile from "./Profile";

import { profileAtom } from '../state';
import { useProfileActions } from '../actions';

function ProfileContainer() {
  const profile = useRecoilValue(profileAtom);
  const setProfileState = useSetRecoilState(profileAtom);
  
  const profileActions = useProfileActions();

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
