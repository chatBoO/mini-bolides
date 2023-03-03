import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Contact = () => {
	return (
		<section className="contact-container page">
			<h1>Contactez-nous</h1>
			<div className="contact-content">
				<section className="informations">
					<h3 className="address">
						CLUB DES MINI BOLIDES DE V-C-B <br />
						Circuits du Parc Omnisports de Vichy <br />
					</h3>

					<div className="phone_mail">
						<div className="phone">
							<h3>Téléphone :</h3>
							<CopyToClipboard text="0642844284">
								<h3
									style={{ cursor: "pointer" }}
									className="clipboard"
									onClick={() => alert("Téléphone copié !")}
								>
									06 80 76 59 46
								</h3>
							</CopyToClipboard>
						</div>

						<div className="mail">
							<h3> Mail :</h3>
							<a
								href="mailto:cmbvcv@laposte.net"
								style={{ cursor: "pointer" }}
							>
								<h3> cmbvcv@laposte.net</h3>
							</a>
						</div>
					</div>
				</section>

				<figure className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.475319255694!2d3.4041412158132096!3d46.141280379114846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f6cd681030f637%3A0x129a998a63861a09!2sParc%20Omnisports%20Auvergne-Rh%C3%B4ne-Alpes%E2%80%94Vichy!5e0!3m2!1sfr!2sfr!4v1677754382598!5m2!1sfr!2sfr"
						width="100%"
						height="450"
						allowFullScreen="no"
						loading="eager"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</figure>
			</div>
		</section>
	);
};

export default Contact;
