import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./post.styles.scss";

const Post = ({ title, author, content, time }) => {
	const newTime = time.toDate().toTimeString().slice(0, 8);
	const shortenedContent =
		content.length > 500 ? content.slice(0, 500) + "..." : content;
	return (
		<article className="post">
			<header>
				<h2>{title}</h2>
				<small>
					<AccountCircleIcon />
					Posted by <a href="https://www.google.com">{author}</a>
				</small>
			</header>
			<p>
				{shortenedContent}
				<small>
					<a href="https://www.google.com">Read more</a>
				</small>
			</p>
			<footer>
				<small>Posted at {newTime}</small>
				<br />
				<small className="comment-icon">
					<QuestionAnswerIcon /> {0} Comments
				</small>
			</footer>
		</article>
	);
};

export default Post;
