import React from 'react'
import CopyToClipboard from "react-copy-to-clipboard";

const Contact = () => {
  return (
		<section className="contact">
			CLUB DES MINI BOLIDES DE V-C-B <br />
			Circuits du Parc Omnisports de Vichy <br />
			Téléphone :{" "}
			<CopyToClipboard text="0642844284">
				<span
					style={{ cursor: "pointer" }}
					className="clipboard"
					onClick={() => alert("Téléphone copié !")}
				>
					📱06 80 76 59 46
				</span>
			</CopyToClipboard>
			<br />
			Mail :{" "}
			<a href="mailto:cmbvcv@laposte.net" style={{ cursor: "pointer" }}>
				💻 cmbvcv@laposte.net
			</a>
		</section>
  );
}

export default Contact