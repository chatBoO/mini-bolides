import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import newsLetter from "../assets/newsletter.png";
import { db } from "../firebase";

const Footer = () => {
	const [mailNewsletter, setMailNewsletter] = useState("");

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
						<form
							onSubmit={(e) => addMemberToNewsletter(e)}
						>
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
