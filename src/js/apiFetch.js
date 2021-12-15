import {API_KEY, BASE_URL} from './apiConfig';

export const ApiFetch = {
    apiCall(params) {
        return fetch(BASE_URL + params + "api_key=" + API_KEY).then(
            (response) =>
                response.ok ? response.json() : throwError(response.statusText)
        );
    },

    getTopMovies(page = 1) {
        return this.apiCall(`/movie/popular?${page}&`);
    },

    getTopRatedMovies(page = 1) {
        return this.apiCall(`/movie/top_rated?page=${page}&`);
    },
    
    getMovieDetails(id = 566525) {
        return this.apiCall(`/movie/${id}?`);
    },

    getMovieKeywords(id = 566525) {
        return this.apiCall(`/movie/${id}/keywords?`);
    },

    getPopularMovies(page = 1) {
        return this.apiCall(`/movie/popular?`);
    },

    getMovieRecommendations(id = 566525){
        return this.apiCall(`/movie/${id}/recommendations?`);
    },

    getMovieReviews(id = 566525){
        return this.apiCall(`/movie/${id}/reviews?`);
    },

    getMovieReleaseDates(id = 566525){
        return this.apiCall(`/movie/${id}/release_dates?`);
    },

    getLatestMovie(){
        return this.apiCall(`/movie/latest?`);
    },

    getNowPlayingMovies(page = 1){
        return this.apiCall(`/movie/now_playing?`);
    },

    getUpcomingMovies(page = 1){
        return this.apiCall(`/movie/upcoming?`);
    },

    searchMovie(query="", page = 1){
        return this.apiCall(`/search/multi?query=${query}&page=${page}&`);
    },

    discoverMovie(sort_by="",page = 1, minScore, maxScore){
        return this.apiCall(`/discover/movie?sort_by=${sort_by}&page=${page}&vote_average.lte=${minScore}&vote_average.gte=${maxScore}&`);
    },

    getSimilarMovies(id = 566525){
        return this.apiCall(`/movie/${id}/similar?`);
    },

    getMovieVideos(id = 566525){
        return this.apiCall(`/movie/${id}/videos?`);
    },

    getMovieCredits(id = 566525){
        return this.apiCall(`/movie/${id}/credits?`);
    }
};

function throwError(message) {
    throw new Error(message);
}
