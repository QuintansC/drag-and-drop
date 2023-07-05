import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.233.131.183:3000/'
    //baseURL: "https://api-clonetrello.herokuapp.com/"
    //baseURL: "http://localhost:5000"
});

export default api;