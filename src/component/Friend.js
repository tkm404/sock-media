import React from "react";
import catSocks from "./../img/cat-socks.jpg"

function Friend() {
  const friendStyles = {
    width: '50px',
    height: '50px'
  }
  return (
    <React.Fragment>
      <img src={catSocks} alt="cat socks" style={friendStyles}></img>
      <label>Potential sock friend: </label>
      <button>Button</button>
    </React.Fragment>

  );
}

export default Friend;