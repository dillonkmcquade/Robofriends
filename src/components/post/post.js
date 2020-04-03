import React from "react";
import "./post.styles.scss";

const Post = ({ title, author, content, time }) => {
	console.log(time);
	const newTime = time.toDate().toTimeString().slice(0,8)
	const shortenedContent = content.length > 500 ? content.slice(0, 500) + '...' : content;
	return (
		<article className="post">
			<h2>{title}</h2>
			<h6>
				Posted by <a href="https://www.google.com">{author}</a>
			</h6>
			<p>{shortenedContent}<a href="https://www.google.com">Read more</a></p>

			<span>Posted at {newTime}</span>
		</article>
	);
};

export default Post;
