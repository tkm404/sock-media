import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FeedStatusUpdate() {
  return (
    <React.Fragment>
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="What's going on?"
          className="me-2"
          aria-label="Search"
        />
        <Button size='sm' variant='outline-info'>
          Stitch It!
        </Button>
      </Form>
      <br></br>
    </React.Fragment>
  );
}

export default FeedStatusUpdate;