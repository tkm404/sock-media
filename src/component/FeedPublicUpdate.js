import React from "react";
import PropTypes from "prop-types";


function FeedPublicUpdate(props){
  const feedPublicStyles = {
    width: '50px',
    height: '50px'
  }
  return(
    <React.Fragment>
      <img src={props.profilePic} alt="profile pic" style={feedPublicStyles}></img>
      <h5>{props.userName}</h5>
      <h5>{props.statusUpdate}</h5>
    </React.Fragment>
  );
}

FeedPublicUpdate.propTypes = {
  profilePic: PropTypes.string,
  userName: PropTypes.string,
  statusUpdate: PropTypes.string
};

export default FeedPublicUpdate;