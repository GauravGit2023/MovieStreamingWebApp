const apiKey = "MOVIE DB APIKEY";

const requests= {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_ad`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-USSpage=1`,
    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=action&page=1&include_ad`,
    requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=comedy&page=1&include_ad`

}

export default requests;
