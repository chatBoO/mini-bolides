import React from "react";
import homeImg from "../assets/banderole_mini_bolides2.jpg";

const Home = () => {
	return (
		<section className="home-container">
			<div className="home-title">
				<h1>Bienvenue sur le site du club des mini bolides</h1>
				<h2>Vichy - Cusset - Bellerive</h2>

				<div className="home-img">
					<img src={homeImg} alt="mini bolides sur piste" />
				</div>
			</div>
			<section className="last-news-container">
				<h2>Dernières actualités :</h2>
				<p>Salut</p>
			</section>
		</section>
	);
};

export default Home;
