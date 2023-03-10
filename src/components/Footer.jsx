import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";

import newsLetter from "../assets/newsletter.png";
import bmc from "../assets/bmc-button.webp";

const Footer = () => {
	const [mailNewsletter, setMailNewsletter] = useState("");
	const [weather, setweather] = useState();

	const year = new Date().getFullYear();

	const addMemberToNewsletter = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(collection(db, "members"), {
				mail: mailNewsletter,
			});
			console.log("Document créé avec l'id : ", docRef.id);
		} catch (e) {
			console.error(
				"Une erreur est survenue lors de l'ajout du document :",
				e
			);
		}

		setMailNewsletter("");
		alert("Votre adresse e-mail a bien été ajoutée !");
	};

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=46.131859&lon=3.425488&lang=fr&units=metric&appid=${
					import.meta.env.VITE_METEO_KEY
				}`
			)
			.then((response) => setweather(response.data));
	}, []);

	return (
		<footer>
			<div className="footer-container">
				{weather !== undefined && (
					<div className="weather">
						<h3>🌤️ Météo {weather.name}</h3>
						<div className="weather__infos">
							<img
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt="icone météo"
							/>
							<h3>
								{Math.round(weather.main.temp)}° -{" "}
								{weather.weather[0].description}
							</h3>
						</div>
					</div>
				)}

				<div className="newsletter">
					<div className="newsletter__icone">
						<img src={newsLetter} alt="Newsletter" />
					</div>

					<div className="newsletter__inscription">
						<p>
							Pour ne rien rater de nos activités, inscris toi à
							notre newsletter !{" "}
						</p>
						<form onSubmit={(e) => addMemberToNewsletter(e)}>
							<input
								type="email"
								id="email"
								placeholder="adresse e-mail"
								value={mailNewsletter}
								onChange={(e) =>
									setMailNewsletter(e.target.value)
								}
								required
							/>
							<input type="submit" value="valider" />
						</form>
					</div>

					<div className="copyright">
						<p>
							© {year} - Club de mini bolides
							Vichy-Cusset-Bellerive. Tous droits réservés.
						</p>
					</div>
				</div>

				<p className="webmaster">
					<a href="https://mathieu-segaud.netlify.app/">
						<span>Mathieu SEGAUD</span>
					</a>
					<span className="bmc">
						<a href="https://www.buymeacoffee.com/segaudmathieu">
							<img src={bmc} alt="buy me a coffee" />
						</a>
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
