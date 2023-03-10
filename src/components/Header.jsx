import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import Loader from "./Loader";
import Navigation from "./Navigation";
import ResponsiveNav from "./ResponsiveNav";

const Header = () => {
	
	const toggleResponsiveNav = () => {
		const responsiveNavButton = document.querySelector(".responsive-nav-button");
	}

	useEffect(() => {
		const headerContainer = document.querySelector(".header-container");

		document.addEventListener("scroll", () => {
			let scrollValue = document.documentElement.scrollTop;

			if (scrollValue > 100) {
				headerContainer.classList.add("hidden");
			} else {
				headerContainer.classList.remove("hidden");
			}
		});
	}, []);

	return (
		<header>
			<Loader />
			<div className="header-container">
				<a href="/" className="logo">
					<img src={logo} alt="logo" />
				</a>
				<Navigation />
				<div className="responsive-nav-button">
					<i className="fa-solid fa-bars"></i>
				</div>
			</div>
			<ResponsiveNav />
		</header>
	);
};

export default Header;
