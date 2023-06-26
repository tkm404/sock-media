import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HeaderSearch() {
  const headerSearchStyle = {
    float: 'right'
  }
  return (
    <React.Fragment>
      <div style={headerSearchStyle}>
        <Form className="d-flex">
          <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          />
          <Button>
            Search
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
}


export default HeaderSearch;
