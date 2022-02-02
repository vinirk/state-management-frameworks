import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUsername } from "../actions/profile";
import Profile from "./Profile";

function ProfileContainer(props) {
  return <Profile onUpdateUsername={props.updateUsername} name={props.name} />;
}

const mapStateToProps = (state) => ({
  name: state.profile.name,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateUsername }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
