import React from "react";
import FeedTimeline from "./FeedTimeline"
import FeedStatusUpdate from "./FeedStatusUpdate";

function Feed(){
  return (
    <React.Fragment>
      <FeedStatusUpdate />
      <FeedTimeline />
    </React.Fragment>
  );
}

export default Feed;