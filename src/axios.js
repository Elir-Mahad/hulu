import axios from "axios";

// base url to make requests to the movie database

const instance = axios.create({
	// the constant 'instance' will store the base url; this url will then be prepended to the request urls in 'request.js'
	// For example: fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`
	// will become ---> fetchTrending: `{instance}/trending/all/week?api_key=${API_KEY}&language=en-US`
	// which in full format is: "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"
	baseURL: "https://api.themoviedb.org/3"
});

export default instance;
