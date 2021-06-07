import axios from "axios";

const API_KEY = 'e0cf4dd6cd7583997bf5751a76460c03';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {

    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){
        return axios(withBaseUrl(`movie/${id}`));
    }
}