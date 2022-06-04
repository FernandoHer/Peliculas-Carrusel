/* eslint-disable prettier/prettier */

import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '5808985f11621cfc95c3e47809149b67',
        language: 'es-ES',
    },
});

export default movieDB;
