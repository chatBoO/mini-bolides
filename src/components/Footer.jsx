import React from "react";
import newsLetter from "../assets/newsletter.png";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="footer-container">
				<div className="newsletter">
					<div className="newsletter__icone">
						<img src={newsLetter} alt="Newsletter" />
					</div>

					<div className="newsletter__inscription">
						<p>
							Pour ne rien rater de nos activités, inscris toi à
							notre newsletter !{" "}
						</p>
						<input
							type="text"
							name="mail"
							id="mail"
							placeholder="adresse e-mail"
						/>
						<button type="submit">Valider</button>
					</div>

					<div className="copyright">
						<p>
							© {year} - Club de mini bolides
							Vichy-Cusset-Bellerive. Tous droits réservés.
						</p>
					</div>
				</div>

				<p className="webmaster">
					Webmaster :{" "}
					<a href="https://mathieu-segaud.netlify.app/">
						<span>Mathieu SEGAUD</span>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
