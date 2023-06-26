import React from "react";
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";

function Header() {
	return (
		<React.Fragment>
			<HeaderLinks />
			<HeaderSearch />
			<hr />
		</React.Fragment>
	);

}

export default Header;


