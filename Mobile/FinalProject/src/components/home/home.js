import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImgIcon from "../../images/user.png"
import ImagePicker from "react-native-image-crop-picker";

const Home = () => {

    // States...!
    const [pickedImg, setPickedImg] = useState(null);
    const [base64DataImg, setBase64DataImg] = useState(null);

    // Gallery handler...!
    const selectImgFromGallery = () => {
        ImagePicker
            .openPicker({
                height: 300,
                width: 300,
                cropping: true,
                includeBase64: true
            })
            .then(success => {
                console.log(success);
                if (success) {
                    setPickedImg(success.path);

                    var customBase64Data = `data:image/png;base64,${success.data}`;
                    setBase64DataImg(customBase64Data)
                }
            })
            .catch(err => console.log('SOmething went wron while picking image: ', err));
    };

    useEffect(() => {
        if (base64DataImg != null) {
            console.log(base64DataImg);
        }
    }, [base64DataImg]);

    return (
        <View style={styles.container}>
            <Image
                // source={pickedImg != null ? pickedImg : ImgIcon}
                // source={{ uri: pickedImg }}
                // source={{ uri : "file:///storage/emulated/0/Android/data/com.testingproject/files/Pictures/693a69fe-83a1-46d4-af66-1f1a34dd81d2.jpg" }}
                source={{ uri: base64DataImg }}
                style={styles.profileImg}
            />
            <Text>
                Profile
            </Text>

            <TouchableOpacity
                onPress={selectImgFromGallery}
            >
                <Text> Select Img from Gallery </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    profileImg: {
        height: 60,
        width: 60
    }
});

export default Home;