import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./request.js";

//! End of imports

function App() {
	//! useState below
	const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
	// (selectedOption) The constant selectedOption contains the url for the trending movies
	// (setSelectedOption) And we declare that we will mainpulate these movies
	// By wrapping the string in a UseState()

	// Usually the useState is an empty brackets
	// Here, we want some data to be displayed on the site before the user clicks on anything
	// the data that we want to display is a list of all trending movies
	// to do this we have inserted 'requests.fetch.trending' into the useState
	return (
		<div className="app">
			<Header />
			<Nav setSelectedOption={setSelectedOption} />
			{/* We declare that we are going to run the setSelectedOption constant, through the nav component. Therefore the nav component, will be able to use it. */}
			<Results selectedOption={selectedOption} />
			{/* We declare that we are going to run the selectedOption constant, through the results component. Therefore the results component, will be able to use it. */}
		</div>
	);
}

export default App;
