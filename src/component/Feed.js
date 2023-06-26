import React from "react";
import FeedTimeline from "./FeedTimeline"
import FeedStatusUpdate from "./FeedStatusUpdate";

function Feed() {
  const styling = {
    border: '1px solid black',
    padding: '1rem'
  }
  return (
    <div style={styling}>
      <FeedStatusUpdate />
      <FeedTimeline />
    </div>
  );
}

export default Feed;