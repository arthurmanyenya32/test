import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground, Image } from 'react-native';


export default class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/images/bg_image-04.png')}
                    style={styles.bgImage}>
                    <Text style={styles.headerTwo} >Settings</Text>

                    {/* Section One */}
                    <View style={styles.containerTwo}>
                        <Text style={styles.headerOne} >General</Text>
                        <Text style={styles.context} >Notifications</Text>
                        <Text style={styles.context} >Dietary Restriction</Text>
                        <Text style={styles.context} >Measuement Systems</Text>
                    </View>

                    {/* Section Two */}
                    <View style={styles.containerTwo}>
                        <Text style={styles.headerThree} >Contact</Text>
                        <Text style={styles.context} >Feedback</Text>
                        <Text style={styles.context} >Questions</Text>
                        <Text style={styles.context} >Email Aroma Support Team</Text>
                    </View>

                    {/* Section Three */}
                    <View style={styles.containerTwo}>
                        <Text style={styles.headerFour} >Account</Text>
                        <Text style={styles.context} >Notifications</Text>
                        <Text style={styles.context} >Dietary Restriction</Text>
                        <Text style={styles.context} >Measuement Systems</Text>
                    </View>
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
    containerTwo: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 20,
        margin: 10,
    },
    headerOne: {
        color: '#FBAE17',
        fontSize: 32,
        fontWeight: '400',
        textAlign: 'left',
    },
    headerThree: {
        color: '#0071BC',
        fontSize: 32,
        fontWeight: '400',
        textAlign: 'left',
    },
    headerFour: {
        color: '#22B573',
        fontSize: 32,
        fontWeight: '400',
        textAlign: 'left',
    },
    headerTwo: {
        color: 'white',
        fontSize: 35,
        fontWeight: '400',
        marginTop: 20,
        textAlign: 'center',
    },
    context: {
        color: 'white',
    }
});