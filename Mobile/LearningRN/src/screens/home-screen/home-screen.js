import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import EntypoIcon from "react-native-vector-icons/Entypo";

import BgImage from "../../images/cover.png";

const HomeScreen = ({ navigation }) => {
    console.log('Nav: ', navigation);

    // const changeScreen = () => {
    //     console.log()
    // };

    return (
        <ImageBackground
            source={BgImage}
            style={styles.cover}
        >
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                    >
                        <EntypoIcon
                            name="menu"
                            color="black"
                            size={50}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <EntypoIcon
                            name="chat"
                            color="black"
                            size={50}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}> Welcome to Home Screen! </Text>

                <TouchableOpacity
                    style={styles.btn}
                // onPress={changeScreen}
                >
                    <Text style={styles.btnText}>
                        Go to About
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    cover: {
        flex: 1
    },

    text: {
        color: "#000",
        fontSize: 30,
        fontFamily: "georgia"
    },

    btn: {
        width: '70%',
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginLeft: '15%',
        marginTop: '5%'
    },

    btnText: {
        color: "white",
        fontSize: 22,
        textAlign: "center"
    },

    header: {
        backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    }
});

export default HomeScreen;