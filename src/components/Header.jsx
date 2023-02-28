import React, { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import logo from "../assets/logo.jpg";
import Navigation from "./Navigation";

const Header = () => {

	// useEffect(() => {
	// 	const headerContainer = document.querySelector(".header-container");

	// 	document.addEventListener("scroll", () => {
	// 		let scrollValue = document.documentElement.scrollTop;
	// 		console.log(scrollValue);

	// 		if (scrollValue > 100) {
	// 			headerContainer.classList.add("hidden");
	// 		} else {
	// 			headerContainer.classList.remove("hidden");
	// 		}
	// 	});
	// }, []);

	return (
		<header>
			<div className="header-container">
				<a href="/" className="logo">
					<img src={logo} alt="logo" />
				</a>
				<div className="contact">
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
					<a
						href="mailto:cmbvcv@laposte.net"
						style={{ cursor: "pointer" }}
					>
						💻 cmbvcv@laposte.net
					</a>
				</div>
			</div>

			<Navigation />
		</header>
	);
};

export default Header;
