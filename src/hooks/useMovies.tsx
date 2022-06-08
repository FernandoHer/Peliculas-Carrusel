/* eslint-disable prettier/prettier */
import  { useEffect, useState } from 'react';
import movieDB from '../api/movieDb';
import {  Movie, MovieDbNovResponse } from '../interfaces/movieInterface';


interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcomming: Movie[],
}

export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular:[],
      topRated: [],
      upcomming: [],
    });

    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDbNovResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDbNovResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDbNovResponse>('/top_rated');
        const upcommingPromise = movieDB.get<MovieDbNovResponse>('/upcoming');

        const response = await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatedPromise,
          upcommingPromise,
        ]);

        setIsLoading(false);
        setMoviesState({
          nowPlaying: response[0].data.results,
          popular: response[1].data.results,
          topRated: response[2].data.results,
          upcomming: response[3].data.results,
        });
    };

    useEffect(() => {
        getMovies();
    }, []);


  return {
    ...moviesState,
    isLoading,
  };

};








