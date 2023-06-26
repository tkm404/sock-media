import React from "react";
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";

function Header() {
	const styling = {
		marginTop: '1rem'
	}
	return (
		<div style={styling}>
			<HeaderLinks />
			<HeaderSearch />
			<hr />
		</div>
	);

}

export default Header;


