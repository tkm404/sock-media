import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';

function HeaderLinks() {
  return (
    // <React.Fragment>
    //   <button type="button">Home</button>
    //   <button type="button">Notifications</button>
    //   <button type="button">Messages</button>
    // </React.Fragment>
    <div>
      <Nav activeKey="/homeLink">
        <Nav.Item>
          <Nav.Link href="/homeLink">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/OtherLink">Notifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/SomeLink">Messages</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}


export default HeaderLinks;
