import React from "react";
import { connect } from "react-redux";
import { useStore } from "../store";
import Profile from "./Profile";

function ProfileContainer(props) {

  const { logoColor } = useStore();
  
  return (
    <div style={{ color: logoColor }}>test</div>
    // <Profile
    //   onUpdateUsername={props.updateUsername}
    //   name={props.name}
    //   fetching={props.fetching}
    //   message={props.message}
    //   error={props.error}
    // />
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
