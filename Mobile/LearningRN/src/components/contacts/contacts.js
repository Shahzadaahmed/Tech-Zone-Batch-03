import React, { useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import Contacts from "react-native-contacts";

const FetchContacts = () => {

    // Note: Fetching contacts handler...!
    const fetchingContacts = async () => {
        try {
            let fetchData = await Contacts.getAll();
            console.log('Contacts fetched: ', fetchData);
        }

        catch (error) {
            console.log('Something went wrong while fetching contacts!');
        };
    };

    // Note: Function to ask user for permission to access device contacts...!
    const requestContactsPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts List',
                    'message': 'This app would like to view your contacts!',
                    'buttonPositive': "Allow",
                    'buttonNegative': "Cancel"
                }
            )

            if (granted == PermissionsAndroid.RESULTS.GRANTED) {
                let successMessage = "You can access the contacts";
                console.log("Accepted: ", successMessage);

                successMessage && fetchingContacts();
            }

            else {
                let rejectMessage = "contacts permission denied";
                console.log("Denied: ", rejectMessage);
            };
        }

        catch (error) {
            console.log('User denied the permission request: ', err);
        };
    };

    useEffect(() => {
        requestContactsPermission();
    }, []);

    return (
        <View>
            <Text style={styles.header}> Fetch Contacts React Native! </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 25,
        textAlign: "center"
    }
});

export default FetchContacts;