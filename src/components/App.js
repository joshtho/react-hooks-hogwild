import React from "react";
import Nav from "./Nav";
//import hogs from "../porkers_data";
import PigTiles from "./PigTiles";

function App() {
	return (
		<div className="ui grid container App">
			<Nav />
			<PigTiles />
		</div>
	);
}

export default App;
