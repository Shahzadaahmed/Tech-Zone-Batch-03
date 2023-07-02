import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearningFlex = () => {
    return (
        // <View style={styles.container}>
        //     <View style={styles.box1}>
        //         <View style={styles.innerSection1}>
        //             <Text style={styles.text}> 1 </Text>
        //         </View>

        //         <View style={styles.innerSection2}>
        //             <Text style={styles.text}> 2 </Text>
        //         </View>

        //         <View style={styles.innerSection3}>
        //             <Text style={styles.text}> 3 </Text>
        //         </View>
        //     </View>

        //     <View style={styles.box2}>
        //         <View style={styles.innerSection1}>
        //             <Text style={styles.text}> 4 </Text>
        //         </View>

        //         <View style={styles.innerSection2}>
        //             <Text style={styles.text}> 5 </Text>
        //         </View>

        //         <View style={styles.innerSection3}>
        //             <Text style={styles.text}> 6 </Text>
        //         </View>
        //     </View>

        //     <View style={styles.box3}>
        //         <View style={styles.innerSection1}>
        //             <Text style={styles.text}> 7 </Text>
        //         </View>

        //         <View style={styles.innerSection2}>
        //             <Text style={styles.text}> 8 </Text>
        //         </View>

        //         <View style={styles.innerSection3}>
        //             <Text style={styles.text}> 9 </Text>
        //         </View>
        //     </View>
        // </View>

        // <View style={styles.container}>
        //     <View style={styles.headerSection}>
        //         <Text style={styles.text}> Header Section </Text>
        //     </View>

        //     <View style={styles.contentSection}>
        //         <Text style={styles.text}> Content Section </Text>
        //     </View>
        // </View>

        <View style={styles.container}>


            <View style={styles.midSections}>
                <Text style={styles.text}> 1 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 2 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 3 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 4 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 5 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 6 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 7 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 8 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 9 </Text>
            </View>

            <View style={styles.midSections}>
                <Text style={styles.text}> 10 </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        // height: '100%',
        flex: 1
    },

    // box1: {
    //     backgroundColor: "blue",
    //     // height: "33.3%",
    //     flex: 1,
    //     display: "flex",
    //     flexDirection: "row",
    //     // marginHorizontal: 15
    //     // paddingHorizontal : 15,
    //     borderWidth: 1
    // },

    // box2: {
    //     backgroundColor: "green",
    //     // height: "33.3%"
    //     flex: 1,
    //     display: "flex",
    //     flexDirection: "row",
    //     borderWidth: 1
    // },

    // box3: {
    //     backgroundColor: "red",
    //     // height: "33.3%"
    //     flex: 1,
    //     display: "flex",
    //     flexDirection: "row",
    //     borderWidth: 1
    // },

    text: {
        color: "black",
        fontSize: 30,
        // textAlign: "center"
    },

    // innerSection1: {
    //     backgroundColor: "gold",
    //     flex: 1,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },

    // innerSection2: {
    //     backgroundColor: "orange",
    //     flex: 1,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },

    // innerSection3: {
    //     backgroundColor: "lightgreen",
    //     flex: 1,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },

    // headerSection: {
    //     backgroundColor: "blue",
    //     flex: 0.5
    // },

    // contentSection: {
    //     backgroundColor: "silver",
    //     flex: 4.5
    // },

    midSections: {
        flex: 1,
        borderWidth: 1,
        margin: 5,
        borderRadius: 5
    }
});

export default LearningFlex;