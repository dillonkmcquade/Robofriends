import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase";

const Header = ({ match }) => {
	return (
		<header className='header'>
			<hgroup>
				<h1>OSI</h1>
				<h6>Open Source Ideas</h6>
			</hgroup>

			<nav>
				<Link to={`${match.url}`}>Explore</Link>
				<Link to={`${match.url}/topics`}>Topics</Link>
				<Link to="/profile">Profile</Link>
				<Link to='/account'>Account</Link>
				<p onClick={() => auth.signOut()}>Sign out</p>
			</nav>
		</header>
	);
};

export default withRouter(Header);
