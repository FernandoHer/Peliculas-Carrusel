/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../themes/AppThemes';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string,
    movie: Movie[],
}


export const HorizontalSlider = ({ title, movie }:Props) => {
  return (

    <View style={ {
        height: (title) ? 260 : 220,
        } }>
        {
            title && <Text style={styles.enCine}>{title}</Text>
        }

        <FlatList
            data= { movie }
            renderItem = { ({item}):any =>(
                <MoviePoster movie={item} width={ 140 } height= {200} /> )}
            keyExtractor= { (item) => item.id.toString()}
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
        />
  </View>

  );
};
