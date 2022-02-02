import React from "react";
import { connect } from "react-redux";
import { useStore } from "../store/store";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { logoColor } = useStore();

  return (
    <div style={{ color: logoColor, background: "blue" }}>test {logoColor}</div>
    // <Profile
    //   onUpdateUsername={props.updateUsername}
    //   name={props.name}
    //   fetching={props.fetching}
    //   message={props.message}
    //   error={props.error}
    // />
  );
}

export default ProfileContainer;
