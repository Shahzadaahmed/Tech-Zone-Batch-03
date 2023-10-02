// Categories component...!

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Categories = (props) => {
    // console.log('Categories props: ', props);
    let { styles, content, categoryHandler } = props;

    return (
        <TouchableOpacity
            style={styles.categoryBox}
            onPress={() => categoryHandler(content.categoryHeader)}
        >
            <Text style={styles.categoryText}> {content.categoryHeader} </Text>
        </TouchableOpacity>
    );
};

export default Categories;