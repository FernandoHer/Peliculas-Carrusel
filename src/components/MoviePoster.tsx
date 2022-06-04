/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../themes/AppThemes';

interface Props {
    movie: Movie,
    height: number,
    width: number,
}

export const MoviePoster = ( {movie, height = 420, width = 300}: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
    <View style= {{
        width,
        height,
        marginHorizontal: 8,
        }}>
        <View style={styles.imageContainer}>
            <Image
            source={{ uri }}
            style= {styles.cardImage}
    />
        </View>

    </View>
  );
};
