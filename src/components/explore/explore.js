import React from "react";

import Post from "../post/post";
import "./explore.styles.scss";

const Explore = ({ posts }) => {
	return (
		<main>
			<h1>Recent posts</h1>
			{posts
				? posts.map(({ id, ...otherProps }) => (
						<Post key={id} {...otherProps} />
				  ))
                : null}
		</main>
	);
};
export default Explore;
