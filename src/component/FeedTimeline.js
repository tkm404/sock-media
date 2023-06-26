import React from "react";
import FeedPublicUpdate from "./FeedPublicUpdate"
import palmSocks from "./../img/palmSocks.jpg";
import spongebob from "./../img/spongebob.jpg";
import duckSocks from "./../img/duck-socks.jpg";

const feedPublicUpdateList = [
  {
    profilePic:palmSocks,
    userName: "Nike Speedo",
    statusUpdate: "Lorem ipsum dolor pie es u Domine. Dona eres requiem. *THWAK*"
  },
  {
    profilePic:spongebob,
    userName: "The Spongiest of Bobs",
    statusUpdate: "Patrick is my plutonic husband 4 lyfe"
  },
  {
    profilePic:duckSocks,
    userName: "Duck your Truck",
    statusUpdate: "Qwack qwack mothertruckers"
  },
]

function FeedTimeline() {
  return (
    <React.Fragment>
      {feedPublicUpdateList.map((feedPublicUpdate, index) =>
        <FeedPublicUpdate profilePic = {feedPublicUpdate.profilePic}
        userName = {feedPublicUpdate.userName}
        statusUpdate = {feedPublicUpdate.statusUpdate}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default FeedTimeline;