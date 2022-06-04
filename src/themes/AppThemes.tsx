/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    isload: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    generalTheme:{
        width: 300,
        height: 420,
    },
    cardImage:{
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius:18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,

        elevation: 10,
    },
    enCine: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
