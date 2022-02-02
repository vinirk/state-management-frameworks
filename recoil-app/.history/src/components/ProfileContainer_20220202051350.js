import React from "react";
import Profile from "./Profile";

function ProfileContainer(props) {
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
