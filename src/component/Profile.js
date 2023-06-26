import React from "react";
import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  return (
    <React.Fragment>
      <ProfileInfo />
      <ProfileBio />
    </React.Fragment>
  );
}

export default Profile;