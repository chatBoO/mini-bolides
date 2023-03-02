import React from "react";
import voitureCourse from "../assets/voiture-course.png";

const Loader = () => {

	return (
		<div className="loader">
			<img
				src={voitureCourse}
				alt="une voiture de course"
				className="voiture-course"
			/>
		</div>
	);
};

export default Loader;
