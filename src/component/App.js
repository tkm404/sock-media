import React from "react";
import Header from "./Header";
import Feed from "./Feed.js";
import FriendAddList from "./FriendAddList.js";
import Profile from "./Profile.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Feed />
      <FriendAddList />
    </React.Fragment>

  );
}

export default App;
