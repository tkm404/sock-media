import React from "react";
import Friend from "./Friend";


function FriendAddList() {
  const styling = {
    border: '1px solid black',
    padding: '1rem'
  }
  return (
    <div style={styling}>
      <h4>Socksum Threadsum</h4>
      <Friend />
    </div>
  );
}

export default FriendAddList;