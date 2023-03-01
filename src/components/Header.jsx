import React, { useEffect } from "react";
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
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
