import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';

function HeaderLinks(){
  return (
    <React.Fragment>
      <button type="button">Home</button>
      <button type="button">Notifications</button>
      <button type="button">Messages</button>
    </React.Fragment>
  //   <div style={{ display: 'block', width: 700, padding: 30 }}>
  //   <h4>React-Bootstrap Nav Component</h4>
  //   <Nav activeKey="/homeLink"
  //     onSelect={(selectedKey) => alert(`You just selected ${selectedKey} !`)}>
  //     <Nav.Item>
  //       <Nav.Link href="/homeLink">Active</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="/OtherLink">Link</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
  //     </Nav.Item>
  //   </Nav>
  // </div>
  );
}


export default HeaderLinks;
