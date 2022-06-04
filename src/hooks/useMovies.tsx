/* eslint-disable prettier/prettier */
import  { useEffect, useState } from 'react';
import movieDB from '../api/movieDb';
import { MovieDbNovPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [moviesInCine, setMoviesInCine] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {

        const resp = await movieDB.get<MovieDbNovPlaying>('/now_playing');
        setMoviesInCine(resp.data.results);

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);


  return {
    moviesInCine,
    isLoading,
  };

};








