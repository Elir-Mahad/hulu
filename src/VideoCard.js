import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
	return (
		<div className="videoCard">
			<img
				alt=""
				src="https://cdnb.artstation.com/p/assets/images/images/029/967/403/large/val-orlov-00-render-16-2.jpg?1599171585"
			/>
			<p>Movie overview</p>
			<h2>Movie title</h2>
			<p>number of likes</p>
		</div>
	);
}

export default VideoCard;
