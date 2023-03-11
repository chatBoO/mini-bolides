import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

import homeImg from "../assets/banderole_mini_bolides.jpg";
import News from "../components/News";

const Home = () => {
	const [allNews, setAllNews] = useState([]);

	const getAllNews = async () => {
		let newsArray = [];
		const news = await getDocs(
			query(collection(db, "news"), orderBy("date", "desc"))
		);
		news.forEach((doc) => {
			newsArray.push(doc.data());
			setAllNews(newsArray);
		});
	};
	useEffect(() => {
		getAllNews();
	}, []);

	return (
		<section className="home-container page">
			<div className="home-content">
				<section className="home-title">
					<h1>Bienvenue sur le site du club des mini bolides</h1>
					<h2>Vichy - Cusset - Bellerive</h2>

					<div className="home-img">
						<img src={homeImg} alt="mini bolides sur piste" />
					</div>
				</section>

				<section className="last-news-container">
					<h2>Dernières actualités :</h2>
					<div className="last-news-content">
						{allNews.map((news, index) => (
							<News news={news} key={index + news.title} />
						))}
					</div>
				</section>
			</div>
		</section>
	);
};

export default Home;
