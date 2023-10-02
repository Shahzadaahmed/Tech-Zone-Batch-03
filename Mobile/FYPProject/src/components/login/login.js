import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async () => {
        try {
            let obj = {
                email,
                password
            };
            console.log(obj);
            setEmail("");
            setPassword("");
            Keyboard.dismiss();
            let dataInStr = JSON.stringify(obj);

            await AsyncStorage.setItem("AuthState", dataInStr);
        }

        catch (error) {
            console.log("Something went wrong while saving data: ", error);
        };
    };

    return (
        <View style={styles.container}>
            <Text> Login Screem </Text>

            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={val => setEmail(val)}
            />

            <TextInput
                placeholder='*****'
                value={password}
                onChangeText={val => setPassword(val)}
                secureTextEntry={true}
            />

            <Button
                title='Submit'
                onPress={submitForm}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Login;