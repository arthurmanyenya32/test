import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground, Image, Button } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/images/bg_image-01.png')}
                    style={styles.bgImage}>
                    <View style={styles.info}>
                        <Text style={styles.headerOne}>Aroma!</Text>
                        <Text style={styles.context}>Easy recipes and cooking hacks right to your phone.{'\n'}{'\n'}</Text>
                        <Button style={styles.btnHome} onPress={() =>
                            this.props.navigation.navigate('About')}
                            title="Continue">
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
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
        color: '#ffffff',
        flex: 1,
        justifyContent: 'center',
    },
    headerOne: {
        color: '#fff',
        fontSize: 60,
        fontWeight: '400',
        textAlign: 'center',
    },
    context: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "200",
        textAlign: 'center',
    },
    btnHome: {
        backgroundColor: '#000',
        width: "50",
    }
});