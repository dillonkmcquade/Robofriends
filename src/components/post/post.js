import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./post.styles.scss";

const Post = ({ title, author, content, time }) => {
	const newTime = time
		.toDate()
		.toTimeString()
		.slice(0, 8);
	const shortenedContent =
		content.length > 500 ? content.slice(0, 500) + "..." : content;
	return (
		<article className="post">
			<h2>{title}</h2>
			<h6>
				<AccountCircleIcon />
				Posted by <a href="https://www.google.com">{author}</a>
			</h6>
			<p>
				{shortenedContent}
				<a href="https://www.google.com">Read more</a>
			</p>

			<span>Posted at {newTime}</span>
			<p className="comment-icon">
				<QuestionAnswerIcon /> {0} Comments
			</p>
		</article>
	);
};

export default Post;
