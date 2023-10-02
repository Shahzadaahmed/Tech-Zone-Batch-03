// Dashboard component...!

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components...!
import Categories from '../categories/categories';

const categoriesData = [
    {
        categoryId: 1,
        categoryHeader: "A"
    },

    {
        categoryId: 2,
        categoryHeader: "B"
    },

    {
        categoryId: 3,
        categoryHeader: "C"
    },
];

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState(undefined);

    const selectCategory = (category) => {
        console.log('Selected category: ', category);
        // category && setSelectedCategory(category);
        if (category) setSelectedCategory(category);
    };

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.headerSection}>
                <Text style={styles.headerText}> Dashboard Ui </Text>
            </View>

            {/* Categories */}
            <View style={styles.categoriesSection}>
                {
                    categoriesData.map((item, index) => {
                        return (
                            <Categories
                                key={index}
                                styles={styles}
                                content={item}
                                categoryHandler={selectCategory}
                            />
                        );
                    })
                }
            </View>

            {/* Products */}
            <View style={styles.productsSection}>
                {
                    selectedCategory ?
                    <Text style={styles.footerText}> {selectedCategory} </Text>
                    :
                    <Text style={styles.footerText}>
                        Please select category!
                    </Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    headerSection: {
        backgroundColor: "white",
        flex: 0.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    headerText: {
        color: "blue",
        fontSize: 20
    },

    categoriesSection: {
        // backgroundColor: "orange",
        flex: 1.5,
        display: "flex",
        flexDirection: "row"
    },

    categoryBox: {
        backgroundColor: "whitesmoke",
        borderColor: "silver",
        borderWidth: 1,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },

    categoryText: {
        color: "red",
        fontSize: 30
    },

    productsSection: {
        backgroundColor: "lightgray",
        flex: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    footerText: {
        color: "blue",
        fontSize: 50,
        textAlign : "center"
    }
});

export default Dashboard;