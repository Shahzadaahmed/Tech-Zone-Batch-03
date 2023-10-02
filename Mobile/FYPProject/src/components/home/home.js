import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const HomeScreen = () => {


    const logOut = async () => {
        try {
            await AsyncStorage.removeItem("AuthState");
            Alert.alert("Log Out Successfull!");
            onRefresh();
        }

        catch (error) {
            console.log("Something went wrong while removing data: ", error);
        };
    };

    return (
        <View style={styles.container}>
            <Text> Home Screen </Text>

            <Button
                title='Logout'
                onPress={logOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;