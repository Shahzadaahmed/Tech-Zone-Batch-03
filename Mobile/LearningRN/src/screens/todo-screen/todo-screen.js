import React, { useState } from 'react';
import {
    ImageBackground,
    View,
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import BgCover from "../../images/cover.png";
import UserIcon from "../../images/user-icon.png";
import SendIcon from "react-native-vector-icons/Ionicons";
import AudioIcon from "react-native-vector-icons/MaterialIcons";

const chatData = [
    {
        id: 1,
        userName: "john",
        message: "Hello",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 2,
        userName: "andrew",
        message: "Hi",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 1,
        userName: "john",
        message: "How are you?",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 2,
        userName: "andrew",
        message: "I am good, How about you?",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 1,
        userName: "john",
        message: "Good! Thank you.",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 2,
        userName: "andrew",
        message: "I need your help",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 1,
        userName: "john",
        message: "Yeah, Tell me what is the problem",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 2,
        userName: "andrew",
        message: "I am looking for a job",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 1,
        userName: "john",
        message: "Send me your resume",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },

    {
        id: 2,
        userName: "andrew",
        message: "sure",
        lastSeen: false,
        timeStamp: new Date().getTime()
    },
];

const TodoScreen = () => {

    // Note: States...!
    const [chatInput, setChatInput] = useState("");

    return (
        <ImageBackground
            source={BgCover}
            style={styles.bgCover}
        >
            {/* Content section */}
            <View style={styles.contentSection}>
                <View style={styles.header}>
                    <Image
                        source={UserIcon}
                        style={styles.userIcon}
                        resizeMode='contain'
                    />

                    <Text style={styles.userName}>
                        Ahmed
                    </Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {
                        chatData.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={styles.chatContainer}
                                >
                                    <Text style={{
                                        color: "white",
                                        fontSize: 24,
                                        textAlign: (item.id % 2 == 0) ? ('right') : ('left')
                                    }}>
                                        {item.message}
                                    </Text>

                                    <View style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: (item.id % 2 == 0) ? ('flex-start') : ('flex-end')
                                    }}>
                                        <Text style={styles.lastSeen}>
                                            {new Date(item.timeStamp).toLocaleTimeString()}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View >

            {/* Footer Section */}
            < View style={styles.footerSection} >
                <TextInput
                    placeholder="Type a message..."
                    placeholderTextColor={'black'}
                    style={styles.inputField}
                    value={chatInput}
                    onChangeText={e => setChatInput(e)}
                />

                <TouchableOpacity
                    style={styles.iconContainer}
                >
                    {
                        (chatInput.trim().length > 0)
                            ?
                            (
                                <SendIcon
                                    name="send"
                                    color="white"
                                    size={25}
                                />
                            )
                            :
                            (
                                <AudioIcon
                                    name="keyboard-voice"
                                    color="white"
                                    size={30}
                                />
                            )
                    }
                </TouchableOpacity>
            </View >
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    bgCover: {
        flex: 1
    },

    contentSection: {
        flex: 1,
        // backgroundColor: "yellow"
        paddingHorizontal: 15
    },

    header: {
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomColor: "white",
        borderBottomWidth: 1
    },

    userName: {
        color: "white",
        fontSize: 25,
        paddingHorizontal: 5
    },

    footerSection: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 5
    },

    chatContainer: {
        backgroundColor: "#db8a18",
        padding: 10,
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 6
    },

    lastSeen: {
        color: "white",
        fontSize: 18
    },

    inputField: {
        width: '80%',
        borderBottomColor: "orange",
        borderBottomWidth: 1,
        color: "black",
        fontSize: 20
    },

    iconContainer: {
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 50
    },

    userIcon: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        borderRadius: 20
    }
});

export default TodoScreen;