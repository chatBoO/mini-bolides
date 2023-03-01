import React from "react";
import homeImg from "../assets/banderole_mini_bolides2.jpg";
import voitureCourse from "../assets/voiture-course.png";

const Home = () => {
	return (
		<section className="home-container">
			<div className="home-title">
				<h1>Bienvenue sur le site du club des mini bolides</h1>
				<h2>Vichy - Cusset - Bellerive</h2>
			</div>

			<div className="home-video-container">
				<img src={homeImg} alt="mini bolides sur piste" />
			</div>
			<div className="last-news-container">
				<h2>Dernières actualités :</h2>
			</div>
			<img src={voitureCourse} alt="une voiture de course" className="voiture-course" />
		</section>
	);
};

export default Home;
