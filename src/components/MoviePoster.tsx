/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../themes/AppThemes';

interface Props {
    movie: Movie,
    height: number,
    width: number,
}

export const MoviePoster = ( {movie, height = 420, width = 300}: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigator = useNavigation();

    return (
    <TouchableOpacity
        onPress={ () => navigator.navigate('DetailScreens', movie) }
        activeOpacity={0.8}
        style= {{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 7,
        }}>
        <View style={styles.imageContainer}>
            <Image
            source={{ uri }}
            style= {styles.cardImage}
    />
        </View>

    </TouchableOpacity>
  );
};
