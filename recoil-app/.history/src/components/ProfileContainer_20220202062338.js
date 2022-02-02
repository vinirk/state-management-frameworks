import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Profile from "./Profile";

import { profileAtom } from '../state';
import { useProfileActions } from '../actions';

function ProfileContainer(props) {

  const [profile, setProfile] = useRecoilState(profileAtom);
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
