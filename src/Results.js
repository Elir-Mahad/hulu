import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios.js";
import FlipMove from "react-flip-move";

//! End of imports

function Results({ selectedOption }) {
	//
	//! UseState below
	const [movies, setMovies] = useState([]);
	// (movies) The constant movies contains an empty array
	// (setMovies) And we declare that we will mainpulate this empty array
	// By wrapping the string in a UseState()

	//! UseEffect below
	// Here we are going to use axios to fetch data from tmdb api
	useEffect(() => {
		async function fetchData() {
			//
			const request = await axios.get(selectedOption);
			// (const request = await axios.get)the constant request = will wait for (is expecting) and it will store  'axios.get' (the 'axios.get' itself stores the constant instance from axios.js)
			// (selectedOption) fetch the url thats currently stored in the constant selectedOption

			// The full url for action movies is: https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&with_genres=28
			// but we don't have to write the full url here because it is already stored in request.js
			// so all we have to do is import it

			setMovies(request.data.results);
			// The constant movies contained an empty array
			// We will now manipulate this empty array
			// by storing the data from tmbd in it
			return request;
			// return all the data
		}

		fetchData();
	}, [selectedOption]);

	// Code that will be rendered below
	return (
		<div className="results">
			<FlipMove>
				{movies.map((movie) => (
					// map through each of the movie item
					<VideoCard
						//
						key={movie.id}
						//
						movie={movie}
						// go to the video card compoenent and pass in the movie as a prop
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Results;
