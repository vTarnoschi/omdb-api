import axios from 'axios';

const baseURL = "http://www.omdbapi.com/?apikey=83bafec4";

class Movies {

    getMovieByTitle(title) {
        return axios.get(`${baseURL}&t=${title}`);
    }

    getMovieById(id) {
        return axios.get(`${baseURL}&i=${id}`)
    }
}

export default new Movies();