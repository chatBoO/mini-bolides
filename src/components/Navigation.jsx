import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.png";

const Navigation = () => {
	return (
		<nav>
			<div className="nav-container">
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
				</ul>
			</div>
			<div className="social-network">
				<p>Rejoignez-nous sur notre page Facebook : </p>
				<a
					href="https://www.facebook.com/groups/507683384816301/"
					target="_blank"
				>
					<img src={facebook} alt="logo facebook" />
				</a>
			</div>
		</nav>
	);
};

export default Navigation;
