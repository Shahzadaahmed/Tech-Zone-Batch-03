import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Item from './item/item';

const AsyncCall = () => {
    const [arr, setArr] = useState([]);

    const apiCall = async () => {
        const apiUrl = "https://dummyjson.com/quotes";

        try {
            let fetchData = await fetch(apiUrl);
            let actualData = await fetchData.json();
            // console.log(actualData);

            if ("quotes" in actualData) {
                setArr(actualData.quotes);
            }
        }

        catch (error) {
            console.log('Error in api integration: ', error);
        };
    }

    useEffect(() => {
        apiCall();
    }, []);

    return (
        <View>
            <Text> Asynchronus Call in React Native </Text>

            <ScrollView>
                {
                    arr.map((el, i) => {
                        return (
                            <Item
                                key={i}
                                data={el}
                                style={styles}
                            />
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "blue",
        fontSize: 25
    }
});

export default AsyncCall;