const API_KEY = "6c3739650bac4adda84d23b443d8c007";

// here we store the url for each movie category in a property
// we will use these properties in results.js
export default {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	//the property fetchTrending stores the url for trending movies
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	//
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	//
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	//
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	//
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	//
	fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	//
	fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	//
	fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	//
	fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	//
	fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
};
