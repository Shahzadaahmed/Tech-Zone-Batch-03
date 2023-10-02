import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
    Keyboard
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LearningStorage = () => {

    const [inputField, setInputField] = useState("")

    // useEffect(() => {
    //     // console.log('Warning message!');
    //     console.warn("Warning message!");
    // }, []);

    const showMessage = (value) => {
        ToastAndroid.show(value, ToastAndroid.LONG);
    }

    const setDataHandler = async () => {
        await AsyncStorage.setItem("userName", JSON.stringify(inputField));
        setInputField("");
        Keyboard.dismiss();
    };

    const getDataHandler = async () => {
        let fetchData = await AsyncStorage.getItem("userName");
        fetchData = JSON.parse(fetchData);
        console.log(fetchData);

        if (fetchData) showMessage(fetchData);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Learning Storage! </Text>

            <TextInput
                placeholder="Type a message..."
                placeholderTextColor={'black'}
                style={styles.inputField}
                value={inputField}
                onChangeText={e => setInputField(e)}
            />

            <TouchableOpacity
                style={styles.btnContainer}
                onPress={setDataHandler}
                disabled={inputField.trim().length < 1}
            >
                <Text style={styles.btnText}>
                    Set Data
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnContainer}
                onPress={getDataHandler}
            >
                <Text style={styles.btnText}>
                    Get Data
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        color: "#000",
        fontSize: 25,
        textAlign: "center"
    },

    btnContainer: {
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 20
    },

    btnText: {
        color: "white",
        fontSize: 20
    },

    inputField: {
        width: '80%',
        borderBottomColor: "orange",
        borderBottomWidth: 1,
        color: "black",
        fontSize: 20,
        marginLeft: '10%'
    },
});

export default LearningStorage;