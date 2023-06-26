import React from "react";
import sockImage from "./../img/sock.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProfileInfo() {
  const profileStyles = {
    // width: '',
    height: '100%'
  }
  const somethingElse = {
    backgroundColor: 'green',
    width: '140px',
    height: '110px',
    borderRadius: '60%',
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <Container>
        <Row style={somethingElse}>
          <img src={sockImage} alt="sock profile" style={profileStyles}></img>
        </Row>
        {/* <div style={somethingElse}>
        <img src={sockImage} alt="sock profile" style={profileStyles}></img>
      </div> */}
        <h4>Jaguar Hanes</h4>
        <Row>
          <Col><p>Threads</p></Col>
          <Col><p>Followers</p></Col>
          <Col><p>Following</p></Col>
        </Row>
      </Container>
    </React.Fragment>

  );
}

export default ProfileInfo;