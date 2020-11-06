import React from "react";
import ReactMarkdown from "react-markdown";

const Page = props => {
	const { id, fields, frontmatter } = props;
	const { title, body = "", slug = "" } = frontmatter;

	return (
		<div className={`Article`} key={id}>
			<h2 className="Article__title">{title}</h2>

			<section className="content">
				<ReactMarkdown
					linkTarget={"_blank"}
					escapeHtml={false}
					source={body}
				/>
			</section>
		</div>
	);
};

export default Page;
