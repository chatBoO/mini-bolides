import React from "react";
import presidentPhoto from "../assets/photo_president.jpg";

const About = () => {
	return (
		<section className="about-container">
			<article className="president-container">
				<h2>✨👨‍💼 Le mot du président 🏎️</h2>
				<div className="president-word">
					<blockquote>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil explicabo quidem laboriosam vel sed distinctio
						aspernatur consequuntur, dolorum nam ea aliquid
						doloribus aut corrupti expedita illo iste animi alias.
						Expedita necessitatibus porro, ipsam neque dolorum at
						odit, blanditiis doloribus delectus fugiat ad fugit
						accusamus saepe laborum, amet quam commodi harum
						consectetur corporis eos reiciendis dicta qui quaerat?
						Delectus ipsa odio similique, velit cupiditate dolorum,
						qui minima consectetur deleniti nobis incidunt neque
						aliquid, corporis natus adipisci. Iusto, quas? Animi
						nemo nihil optio illo culpa! A, sapiente, dolores
						officia, reiciendis alias facere necessitatibus eveniet
						praesentium sit perferendis illo minima quos esse quod
						fugiat velit. Saepe vitae illo et sit excepturi,
						accusantium fugit facere eaque maxime provident cumque
						numquam dolores animi dolorem odio, reiciendis possimus
						quis autem ipsam quas earum porro, soluta suscipit!
						Aliquam facere obcaecati, in dignissimos ipsum dicta
						sapiente, velit itaque provident reprehenderit excepturi
						odio illo, natus modi ipsa fuga sit. Eum eligendi quas
						quaerat veritatis illo animi, veniam magnam at quod
						debitis! Possimus maxime quas mollitia placeat tempora
						inventore vel in labore molestiae deserunt, asperiores
						natus quos odit ratione a tenetur perspiciatis. Ea modi,
						impedit iure nemo fuga autem eos labore! Deserunt error
						quaerat voluptates ad consectetur vitae, sit tempore?
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
