/* eslint-disable react-hooks/exhaustive-deps *//* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackgroud = ( {children}:Props ) => {

    const {prevColors, colors, setPrevMainColor} = useContext( GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
      fadeIn( () => {
          setPrevMainColor( colors);
          fadeOut();
      });
    }, [colors]);


    return (
    <View style={{flex:1}}>
        <LinearGradient
            colors={[prevColors.primary, prevColors.secondary, '#FFF']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.5, y: 0.7}}
        />
        <Animated.View style= {{...StyleSheet.absoluteFillObject, opacity}}>
            <LinearGradient
                colors={[colors.primary, colors.secondary, '#FFF']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.5, y: 0.7}}
            />
        </Animated.View>
        {children}
    </View>
  );
};
