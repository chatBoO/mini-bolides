import React from "react";

const News = ({ news }) => {
	return (
		<div className="last-news">
			<div className="news-title">
				<h3>{news.title}</h3>
				<p>
					publiée le : <span className="date">{news.date}</span>
				</p>
			</div>
			<p>{news.content}</p>
		</div>
	);
};

export default News;
