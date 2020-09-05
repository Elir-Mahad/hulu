import React from "react";
import "./VideoCard.css";

import TextTruncate from "react-text-truncate";

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
			<TextTruncate
				// Grab the movie.overview with the react-text-truncate tool
				text={movie.overview}
				// the property text stores the movie overview
				line={2}
				// if the text is more than two lines
				element="p"
				// take the content of the p element
				truncateText="…"
				// cut it of after 2 lines, and at the end of put ...
				// textTruncateChild={<a href="#">Read more</a>}
				// in the href above you can insert the link to a url, where the reader can read more
			/>
			<h2>{movie.original_title}</h2>
			{/* grab the movie title */}
		</div>
	);
}

export default VideoCard;
