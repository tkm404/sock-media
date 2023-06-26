import React from "react";
import catSocks from "./../img/cat-socks.jpg"

function Friend() {
  return (
    <React.Fragment>
      <img src={catSocks} alt="cat socks"></img>
      <label>Potential sock friend</label>
      <button>Button</button>
    </React.Fragment>

  );
}

export default Friend;