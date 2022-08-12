import React from "react";
import Top from "./top.jsx"
import LightBox from "./lighbox.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex flex-column justify-content-center align-items-center w-25"><Top/><LightBox/></div>
	);
};

export default Home;
