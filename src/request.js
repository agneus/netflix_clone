const apiKey="1d40c29e986f35c060519b9e4d67eabc";

const requests={
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&with_genres=28`,
    fetchHorrorMovies:`discover/movie?api_key=${apiKey}&with_genres=27`,
};

export default requests;