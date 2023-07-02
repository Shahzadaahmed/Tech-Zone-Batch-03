import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import data from "./data/data";

const List = () => {

    // States...!
    const [arr, setArr] = useState(data);

    // useEffect(() => {
    //     console.log("Data: ", arr);
    // }, []);

    return (
        <View style={styles.container}>
            <Text> List in RN </Text>

            <ScrollView>
                {
                    arr.map((el, i) => {
                        return (
                            <TouchableOpacity
                                key={i}
                                onPress={() => console.log(el)}
                            >
                                <Text style={styles.text}>
                                    {el.userName}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "blue",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default List;