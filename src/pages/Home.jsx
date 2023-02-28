import React from "react";
import banderole from "../assets/banderole_mini_bolides.jpg";

const Home = () => {
	return (
		<section className="home-container">
			<div className="home-title">
				<div className="home-title__text">
					<h1>Bienvenue sur le site du club des mini bolides</h1>
					<h2>Vichy - Cusset - Bellerive</h2>
				</div>
				<img src={banderole} alt="banderole mini bolides" />
			</div>

			<div className="home-video-container">
				<iframe
					src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100010061594460%2Fvideos%2F1309080606321681%2F%3Fidorvanity%3D507683384816301&show_text=false&width=560&t=0"
					width="560"
					height="314"
					scrolling="no"
					frameborder="0"
					allowfullscreen="true"
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					allowFullScreen="true"
				></iframe>
			</div>
			<div className="last-news-container">
				<h2>Dernières actualités :</h2>
			</div>
		</section>
	);
};

export default Home;
