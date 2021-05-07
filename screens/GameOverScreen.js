import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = props =>
{
    return(
        <View style={styles.screen}>
            <TitleText>The Games is Over!</TitleText>
            <View style={styles.ImageContainer}>
            <Image 
            source={require('../assets/success.png')} 
            style={styles.image}
            resizeMode="cover"
            />
            </View>
            <BodyText>Number of rounds: {props.roundNumber}</BodyText>
            <BodyText>Number of rounds: {props.useNumber}</BodyText>
            <MainButton  onPress={props.onRestart}>
            NEW GAMES
            </MainButton>
        </View>
        
        );

};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '100%',
        height: '100%'
    },
    ImageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30

    }
    
});
export default GameOverScreen;