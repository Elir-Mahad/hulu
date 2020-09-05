import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./request.js";

function App() {
	//! useState below
	const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
	//the trending movies will be always display when the site is first visited
	return (
		<div className="app">
			<Header />
			<Nav />
			<Results selectedOption={selectedOption} />
		</div>
	);
}

export default App;
