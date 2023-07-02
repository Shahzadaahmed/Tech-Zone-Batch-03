import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

let userIcon = "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";

const LearningCamera = () => {

    // Note: States...!
    const [profileDetails, setProfileDetails] = useState(null);

    const uploadImagefromCamera = async () => {
        try {
            let response = await ImagePicker
                .openCamera({
                    height: 400,
                    width: 300,
                    cropping: true,
                    includeBase64: true
                });
            console.log(response);

            response && setProfileDetails(response);
        }

        catch (error) {
            console.log('Something went wrong while uploading image from camera: ', error);
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Learning Camera
            </Text>

            <View style={styles.middleSection}>
                <Image
                    source={{
                        uri: profileDetails == null ? userIcon : profileDetails.path
                    }}
                    style={styles.profileImg}
                />

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={uploadImagefromCamera}
                >
                    <Text style={styles.btnText}>
                        Upload Image
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    header: {
        color: "#000",
        fontSize: 25,
        textAlign: "center"
    },

    middleSection: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    profileImg: {
        height: 150,
        width: 200,
        borderRadius: 10,
        resizeMode: "contain",
        marginVertical: 20
    },

    btnContainer: {
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },

    btnText: {
        color: "white",
        fontSize: 20
    }
});

export default LearningCamera;