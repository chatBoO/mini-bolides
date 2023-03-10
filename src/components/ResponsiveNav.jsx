import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.png";

const ResponsiveNav = () => {

	const toggleResponsiveNav = () => {
		const responsiveNavButton = document.querySelector(".responsive-nav");
		
		responsiveNavButton.classList.toggle("open");
	}

	return (
		<nav className="responsive-nav" onClick={toggleResponsiveNav}>
			<div className="responsive-nav-container">
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "nav-active" : undefined
							}
						>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "nav-active" : undefined
							}
						>
							À propos
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/gallery"
							className={({ isActive }) =>
								isActive ? "nav-active" : undefined
							}
						>
							Galerie
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? "nav-active" : undefined
							}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<a
							href="https://www.facebook.com/groups/507683384816301/"
							target="_blank"
						>
							<img src={facebook} alt="logo facebook" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default ResponsiveNav;
