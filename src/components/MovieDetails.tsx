/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import currencyFormatter from 'currency-formatter';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';




interface Props {
    movieFull: MovieFull,
    cast: Cast[],
}

export const MovieDetails = ( { movieFull, cast }:Props ) => {
  return (
    <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: "row"}}>
            <Icon
                name="star-outline"
                size={20}
                color="grey"
            />
            <Text> {movieFull.vote_average} </Text>
            <Text style={{marginLeft: 15}}>
                - {movieFull.genres.map(gen => gen.name).join(', ')}
            </Text>
        </View>
        <Text style={{ fontSize:23, marginTop: 10, fontWeight:'bold', color:'black'}}>
            Historia:
        </Text>
        <Text> {movieFull.overview}</Text>

        <Text style={{ fontSize:23, marginTop: 10, fontWeight:'bold', color:'black'}}>Presupuesto: </Text>
        <Text style={{ fontSize: 20 ,fontWeight: 'bold'}}> { currencyFormatter.format( movieFull.budget, {code:'USD'})  }</Text>

        <View style={{ marginTop: 10, marginBottom: 100}}>
            <Text style={{ fontSize:23, marginTop: 10, fontWeight:'bold', color:'black'}}>
                Actores:
            </Text>
            <FlatList
                data={cast}
                keyExtractor = {(item) => item.id.toString() }
                renderItem = { ({item}) => <CastItem actor={item}/>}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                style = {{ marginTop: 10 }}
            />

        </View>

    </View>
  );
};
