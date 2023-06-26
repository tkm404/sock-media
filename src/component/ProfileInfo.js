import React from "react";
import sockImage from "./../img/sock.jpg";

function ProfileInfo() {
  return (
    <React.Fragment>
    <img src={sockImage} alt="sock profile"></img>
    <h4>Jaguar Hanes</h4>
    <h5>Threads</h5>
    <h5>Followers</h5>
    <h5>Following</h5>
    </React.Fragment>

  );
}

export default ProfileInfo;