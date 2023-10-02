import React from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import BgCover from "../../images/splash.png"

const About = ({ navigation }) => {
    console.log(navigation);
    return (
        <ImageBackground
            source={BgCover}
            style={{
                flex: 1
            }}
            resizeMode='cover'
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("home")}
            >
                <Text> Move to Home </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
});

export default About;