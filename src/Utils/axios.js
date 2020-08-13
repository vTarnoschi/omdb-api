import axios from 'axios';

const baseURL = "http://www.omdbapi.com/?apikey=83bafec4";

const instance = axios.create({
    baseURL,
});

export default instance;