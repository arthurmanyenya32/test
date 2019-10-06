import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/images/bg_image-03.png')}
                    style={styles.bgImage}>
                    <Text style={styles.headerTwo} >My Recepies{'\n'}</Text>
                    <Text style={styles.headerOne} >Recently Viewed</Text>
                    <ScrollView horizontal style={styles.imageCanvas}>
                        <Image style={styles.imageBox} source={require('./assets/images/prawns_label-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/berries_label-05.png')} />
                    </ScrollView>
                    <Text style={styles.headerOne} >Liked</Text>
                    <ScrollView horizontal style={styles.imageCanvas2}>
                        <Image style={styles.imageBox} source={require('./assets/images/berries_label-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/bbq_label-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/avocado_label-05.png')} />
                        <Image style={styles.imageBox} source={require('./assets/images/potatoes_label-05.png')} />
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
    headerOne: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
    },
    headerTwo: {
        color: '#000',
        fontSize: 35,
        fontWeight: '400',
        marginTop: 20,
        textAlign: 'center',
    },
    imageCanvas: {
        flex: 1,
        height: '50%',
        width: SCREEN_WIDTH,
    },
    imageCanvas2: {
        height: '30%',
        width: SCREEN_WIDTH,
    },
    imageBox: {
        height: 160,
        width: 160,
        resizeMode: 'contain',
    }
});