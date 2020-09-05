import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

//! End of imports

const base_url = "https://image.tmdb.org/t/p/original/";

// function VideoCard({ movie }) {
const VideoCard = forwardRef(({ movie }, ref) => {
	return (
		<div ref={ref} className="videoCard">
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

			<h2>{movie.original_title || movie.original_name} </h2>
			{/* movie.original_title and movie.original_name are two data points in the tmdb json
				both of these data points output the movie name
				this line says use movie.original_title to get the movie poster
				or use movie.original_name to get the movie poster */}
			<p className="videoCard_stats">
				{movie.release_date || movie.first_air_date}
				{/* Show the movie release date or first date that it was aired */}
				<ThumbUpSharp />
				{/* the ThumpUp icon was imported from material ui */}
				{movie.vote_count}
			</p>
		</div>
	);
});

export default VideoCard;
