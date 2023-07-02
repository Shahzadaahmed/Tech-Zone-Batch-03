import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import DisbaleEye from "react-native-vector-icons/Entypo";

let icon = "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";

const Gallery = () => {

    // States...!
    const [picture, setPicture] = useState(null);

    const galleryHandler = async () => {
        try {
            let response = await ImageCropPicker
                .openPicker({
                    height: 300,
                    width: 300,
                    cropping: false,
                    includeBase64: true
                })
            console.log(response);

            if (response) {
                setPicture(response);
            };
        }

        catch (error) {
            console.log('SOmeting went wrong while accessing gallery: ', error);
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Upload Profile Picture </Text>

            <View style={styles.imgContainer}>
                <Image
                    source={{
                        uri: picture == null ? icon : picture.path
                    }}
                    style={styles.img}
                />
            </View>

            <Button
                title='Upload Image'
                onPress={galleryHandler}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='abc@xyz.com'
                    style={styles.inpueField}
                />
                <DisbaleEye
                    name="eye-with-line"
                    color="black"
                    size={25}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        color: "blue",
        fontSize: 25,
        textAlign: "center"
    },

    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },

    img: {
        height: 200,
        width: 200,
        resizeMode: "contain"
    },

    inputContainer: {
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingHorizontal: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginHorizontal : 10
    },

    inpueField: {
        color: "black",
        fontSize: 18,
        width: '90%',
        // backgroundColor: "orange",
        borderBottomColor: "transparent",
        borderBottomWidth: 0
    }
});

export default Gallery;