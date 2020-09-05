import React from "react";
import "./VideoCard.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
	return (
		<div className="videoCard">
			<img
				src={`
					${base_url}
					${movie.backdrop_path || movie.poster_path}`}
				// backdrop_path and poster_path are two data points in the tmdb json
				// both of these data points output the movie poster
				// this line says use movie.backdrop_path to get the movie poster
				// or use movie.poster_path to get the movie poster
				alt=""
			/>
			<p>Movie: {movie.overview}</p>
			{/* grab movie overview */}
			<h2>Title: {movie.original_title}</h2>
			{/* grab the movie title */}
		</div>
	);
}

export default VideoCard;
