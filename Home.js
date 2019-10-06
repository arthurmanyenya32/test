import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground, Image } from 'react-native';
import * as Font from 'expo-font';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                {/* Image Background */}
                <ImageBackground source={require('./assets/images/bg_image-02.png')}
                    style={styles.bgImage}>
                    <ScrollView horizontal style={styles.imageCanvas}>
                        <Image style={styles.imageBox} source={require('./assets/images/avocado-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/prawn-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/berries-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/potatoes-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/bbq-05.png')} />
                    </ScrollView>

                    {/* Bottom Section */}

                    <ScrollView style={styles.info}>

                        <Text style={styles.headerOne}>This Week Recipes & Cooking Tips{'\n'}</Text>
                        <Text style={styles.context}>1. Use a damp towel to keep a cutting board in place.{'\n'}{'\n'}
                            2. Use a bench scraper to transfer ingredients from a cutting board.{'\n'}{'\n'}
                            3. Add baking soda to tomato sauce.{'\n'}{'\n'}
                            4. Add sour cream for extra-smooth scrambled eggs.{'\n'}{'\n'}
                            5. Keep those knives sharp.</Text>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_SIZE = 160;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    info: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,

    },
    headerOne: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    headerTwo: {
        color: '#0000',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 20,
        textAlign: 'center',
    },
    context: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "200",
        textAlign: 'left',
    },
    imageCanvas: {
        flex: 1,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        resizeMode: 'contain'
    },
    imageBox: {
        height: 280,
        width: 280,
        resizeMode: 'contain'
    }
});