import React from "react";
import './header.styles.scss';
import { auth } from "../../firebase/firebase";
const Header = () => {
	return (
		<header>
			<hgroup>
				<h1>OSI</h1>
				<h6>Open Source Ideas</h6>
			</hgroup>
			
			<nav>
				<p>Explore</p>
				<p>Topics</p>
				<p>Profile</p>
				<p>Account</p>
				<p onClick={() => auth.signOut()}>Sign out</p>
			</nav>
		</header>
	);
};

export default Header;
