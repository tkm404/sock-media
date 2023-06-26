import React from "react";

function HeaderSearch() {
  const headerSearchStyle = {
    float: 'right'
  }
  return (
    <React.Fragment>
      <div style={headerSearchStyle}>
        <input type="text" value="Search" />
        <button type="button">Search</button>
      </div>
    </React.Fragment>
  );
}


export default HeaderSearch;
