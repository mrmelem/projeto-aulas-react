import api from 'axios';

const connection = api.create({
    baseURL: 'http://localhost:3333'
})

export default connection;