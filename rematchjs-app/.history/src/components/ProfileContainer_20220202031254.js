import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

function ProfileContainer(props) {
  console.log(props.name, "AAA")
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

const mapStateToProps = (state) => ({
  name: state.profile.name,
  fetching: state.profile.fetching,
  message: state.profile.message,
  error: state.profile.error,
});
const mapDispatchToProps = (dispatch) => ({
  updateUsername: dispatch.profile.updateUsername,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
