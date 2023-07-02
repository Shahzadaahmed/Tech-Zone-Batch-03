import React from 'react';
import { View, Text } from 'react-native';

const Item = (props) => {
    console.log("Props: ", props);
    let { data, style } = props;

    return (
        <View
            style={{ borderBottomWidth: 1 }}
        >
            <Text style={style.text}>
                {data.id + " " + data.quote}
            </Text>
        </View>
    );
}

export default Item;