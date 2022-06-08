/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';



interface Props extends StackScreenProps<RootStackParams, 'DetailScreens'>{}

const screenHeight = Dimensions.get('screen').height;


export const DetailScreens = ( { route, navigation }: Props ) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);


  return (
    <ScrollView>
      <View style={ styles1.imageContain}>
        <View style={ styles1.ImageBorder} >
          <Image
            source={{uri}}
            style= {styles1.cardImage}
        />
        </View>

      </View>
      <View style={styles1.marginContainer}>
        <Text style= {styles1.subTitle}>{movie.original_title}</Text>
        <Text style= { styles1.title}>{movie.title}</Text>
      </View>

        {
          isLoading
            ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }}/>
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }


        <View style= {styles1.backButton} >
          <TouchableOpacity >
          <Icon
            name='arrow-undo-circle-outline'
            size={50}
            color='white'

            onPress ={() => navigation.navigate('HomeScreens')}
        />
        </TouchableOpacity>
        </View>

    </ScrollView>

  );
};

const styles1 = StyleSheet.create({
  imageContain: {
    width:'100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
    elevation: 9,
  },
  cardImage:{
    flex: 1 ,
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop: 15,
  },
  subTitle:{
    fontSize: 14,
    opacity: 0.8,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  ImageBorder:{
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,

  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 5,
  },
});
