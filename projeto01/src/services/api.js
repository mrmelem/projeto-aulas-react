import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://localhost:3333'
})

export default connection;