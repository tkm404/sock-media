import React from "react";
import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  const styling = {
    border: '1px solid black',
    padding: '1rem'
  }
  return (
    <div style={styling}>
      <ProfileInfo />
      <ProfileBio />
    </div>
  );
}

export default Profile;