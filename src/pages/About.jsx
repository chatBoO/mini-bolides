import React from "react";
import presidentPhoto from "../assets/photo_president.jpg";

const About = () => {
	return (
		<section className="about-container">
            <div className="about-title">
            <h1>À propos de notre club...</h1>
            </div>
			<article className="president-container">
				<h2>✨👨‍💼 Le mot du président 🏎️</h2>
				<div className="president-word">
					<blockquote>
						"Notre club est ouvert à tous les niveaux que vous soyez simple débutant ou déjà compétiteur. Au sein de notre petite communauté de passionés vous y trouverez conseils et expériences. Le tout dans une ambiance conviviale ! "
					</blockquote>

					<figure>
						<img src={presidentPhoto} alt="Le president du club" />
						<figcaption>Christophe Minotte</figcaption>
					</figure>
				</div>
			</article>

			<section className="opening_price-container">
				<h2>🕑 Horaires d'ouverture 📆</h2>
				<div className="opening_price">
					<div className="opening-hours">
						<table>
							<thead>
								<tr>
									<th colspan="2">Horaires :</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Lundi</td>
									<td>10h - 18h</td>
								</tr>
								<tr>
									<td>Mardi</td>
									<td>10h - 18h</td>
								</tr>
								<tr>
									<td>Mercredi</td>
									<td>10h - 18h</td>
								</tr>
								<tr>
									<td>Jeudi</td>
									<td>10h - 18h</td>
								</tr>
								<tr>
									<td>Vendredi</td>
									<td>10h - 18h</td>
								</tr>
								<tr>
									<td>Samedi</td>
									<td>10h - 18h</td>
								</tr>
								<tr>
									<td>Dimanche</td>
									<td>10h - 18h</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="price">
						<h3>Prix de la licence : </h3>
						<p>
							xx € / an <br />
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default About;
