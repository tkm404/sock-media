import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header";
import Feed from "./Feed.js";
import FriendAddList from "./FriendAddList.js";
import Profile from "./Profile.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <Container>
        <Header />
        <Row>
          <Col xs lg='3.5'><Profile /></Col>
          <Col xs lg='6'><Feed /></Col>
          <Col xs lg='3'><FriendAddList /></Col>
        </Row>
      </Container>
  );
}

export default App;
