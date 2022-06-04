/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { styles } from '../themes/AppThemes';
import { MoviePoster } from '../components/MoviePoster';

const  windowWith  = Dimensions.get('window').width;




export const HomeScreens = () => {

  const { moviesInCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();


  if ( isLoading ){
    return (
      <View style={styles.isload}>
        <ActivityIndicator color="blue" size={100}/>
      </View>
    );
  }

  return (
    <ScrollView>

    <View style={ {marginTop: top + 20 } }>
        <View style={ { height: 440 } }>
          <Carousel
            data= { moviesInCine}
            renderItem = { ({item}) =>( 
              <MoviePoster movie={item} width={ 300 } height= {440} />) }
            sliderWidth= { windowWith }
            itemWidth = { 300 }
          />
        </View>
        {/* peliculas en Cine */}
        <View style={{height: 250}}>
          <Text style={styles.enCine}>En cine</Text>
          <FlatList
            data= { moviesInCine}
            renderItem = { ({item}):any =>(
              <MoviePoster movie={item} width={ 140 } height= {200} /> )}
            keyExtractor= { (item) => item.id.toString()}
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

    </ScrollView>

  );
};
