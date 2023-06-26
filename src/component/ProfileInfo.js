import React from "react";
import sockImage from "./../img/sock.jpg";

function ProfileInfo() {
  const profileStyles = {
    width: '75px',
    height: '75px'
  }
  return (
    <React.Fragment>
    <img src={sockImage} alt="sock profile" style={profileStyles}></img>
    <h4>Jaguar Hanes</h4>
    <h5>Threads</h5>
    <h5>Followers</h5>
    <h5>Following</h5>
    </React.Fragment>

  );
}

export default ProfileInfo;