import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
});
//Conexão com a api no repositorio API-Simples

export default api;