import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const FileTesting = () => {

    const uploadImageToServer = async (res) => {
        console.log('Image Res: ', res);

        try {
            let response = await axios({
                method: "GET",
                url: "http://192.168.100.36:8080",
            });
            console.log(response);
        }

        catch (error) {
            console.log("Something went wrong while uploading image to server: ", error);
        };
    };

    const uploadImageHandler = () => {
        uploadImageToServer('Hello');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.uploadBtn}
                onPress={uploadImageHandler}
            >
                <Text style={styles.btnText}> Upload Image </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },

    uploadBtn: {
        backgroundColor: "blue",
        width: "100%",
        borderColor: "darkblue",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    btnText: {
        color: "white",
        fontSize: 20
    }
});

export default FileTesting;