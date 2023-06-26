import React from "react";
import { Nav } from "react-bootstrap";
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";

function Header() {
	const styling = {
		marginTop: '1rem',
		display: 'block',
		width: 700,
		padding: 30
	}

	return (
		<div style={styling}>
			<h1>Threads on Threads</h1>
			<Nav>
				<Nav.Item><HeaderLinks /></Nav.Item>
				<Nav.Item><HeaderSearch /></Nav.Item>
			</Nav>
			<hr />
		</div>
	);

}

export default Header;


