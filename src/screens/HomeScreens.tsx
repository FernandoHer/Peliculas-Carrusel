/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { styles } from '../themes/AppThemes';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackgroud } from '../components/GradientBackgroud';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const  windowWith  = Dimensions.get('window').width;




export const HomeScreens = () => {

  const { nowPlaying, popular, upcomming, topRated ,isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const {setMainColor} = useContext(GradientContext);

  const getPosterColors = async (index: number ) =>{
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { primary = 'blue', secondary = 'green' } = await getImageColors( uri);
    setMainColor({primary,secondary});

  };

  useEffect(() => {
    if (nowPlaying.length > 0){
      getPosterColors(0);
    }
  }, [nowPlaying]);



  if ( isLoading ){
    return (
      <View style={styles.isload}>
        <ActivityIndicator color="blue" size={100}/>
      </View>
    );
  }

  return (
    <GradientBackgroud>
      <ScrollView>
        <View style={ {marginTop: top + 20 } }>
          <View style={ { height: 440 } }>
            <Carousel
              data= { nowPlaying }
              renderItem = { ({item}) =>(
                <MoviePoster movie={item} width={ 300 } height= {440} />) }
              sliderWidth= { windowWith }
              itemWidth = { 300 }
              inactiveSlideOpacity = {0.9}
              onSnapToItem = {(index) => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Populares" movie={popular} />
          <HorizontalSlider title="Por venir" movie={upcomming} />
          <HorizontalSlider title="Las más galardonadas" movie={topRated} />
        </View>

      </ScrollView>
    </GradientBackgroud>


  );
};
