/* eslint-disable react-hooks/exhaustive-deps *//* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDb';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],
}

export const useMovieDetails = (movieId:number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise =  movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResp, castResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castResp.data.cast,
        });
    };

    useEffect(() => {
      getMovieDetails();

    }, []);

    return {
        ...state,
    };

};
