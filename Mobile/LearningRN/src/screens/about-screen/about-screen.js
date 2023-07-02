import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}> Welcome to About Screen! </Text>

            <TouchableOpacity
                style={styles.btn}
                // onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.btnText}>
                    Go to Home
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontSize: 30
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
    }
});

export default AboutScreen;