import React from "react";
import { SecondsCounter } from "./SecondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
        <div className="col-12">
			<SecondsCounter />
		</div>

			
	);
};

export default Home;