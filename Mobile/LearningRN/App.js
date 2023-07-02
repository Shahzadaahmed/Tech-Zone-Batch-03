// import React, { useState } from "react";
// import {
//     Text,
//     View,
//     Button,
//     Alert,
//     StyleSheet,
//     TouchableOpacity,
//     TextInput,
//     Keyboard,
//     Image
// } from "react-native";

// import Logo from "./src/images/test.png";

// const App = () => {

//     // Handelung states here...!
//     const [input, setInput] = useState("");

//     const submitForm = () => {
//         console.log(input);
//         setInput("");
//         Keyboard.dismiss();
//         // console.log('Function is working!');
//         // Alert.alert("Hello World!");
//     };

//     return (
//         <>
//             <View style={customStyles.container}>
//                 <Text
//                     // Inline way to write css...!
//                     // style={{
//                     //     color: "blue",
//                     //     fontSize: 25
//                     // }}

//                     // Another and recomended way...!
//                     style={customStyles.header}
//                 >
//                     React Native class # 02!
//                 </Text>

//                 {/* <Button
//                     title="Submit"
//                     onPress={submitForm}
//                     // color={'yellow'}
//                     style={customStyles.btn}
//                 /> */}

//                 <TouchableOpacity
//                     style={customStyles.btn}
//                     onPress={submitForm}
//                 >
//                     <Text style={customStyles.btnText}>
//                         Submit Form
//                     </Text>
//                 </TouchableOpacity>

//                 <TextInput
//                     placeholder="Write Something"
//                     value={input}
//                     onChangeText={(e) => { setInput(e) }}
//                 />

//                 <Image
//                     source={Logo}
//                     style={customStyles.logo}
//                 />
//             </View>
//         </>
//     );
// };

// // Note: handeling styling here...!
// const customStyles = StyleSheet.create({
//     header: {
//         color: "red",
//         fontSize: 30
//     },

//     container: {
//         backgroundColor: "lightblue",
//         height: '100%'
//     },

//     btn: {
//         width: '70%',
//         backgroundColor: "green",
//         padding: 10,
//         borderRadius: 5,
//         marginLeft: '15%',
//         marginTop: '5%'
//     },

//     btnText: {
//         color: "white",
//         fontSize: 22,
//         textAlign: "center"
//     },

//     logo: {
//         height: 150,
//         width : 150
//     }
// });

// export default App;

// Stack navigation
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
let Stack = createNativeStackNavigator();
let { Navigator, Screen } = Stack;

// Screens
import HomeScreen from './src/screens/home-screen/home-screen';
import AboutScreen from './src/screens/about-screen/about-screen';
import ContactScreen from './src/screens/contact-screen/contact-screen';
import TodoScreen from './src/screens/todo-screen/todo-screen';
import FetchContacts from './src/components/contacts/contacts';
import LearningCamera from './src/components/learning-camera/camera';
import Gallery from './src/components/learning-gallery/gallery';

const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator>
                    <Screen name='Gallery' component={Gallery} options={{ headerShown: false }} />
                    <Screen name='Learning-Camera' component={LearningCamera} options={{ headerShown: false }} />
                    <Screen name='Fetch-Contacts' component={FetchContacts} options={{ headerShown: false }} />
                    <Screen name='Todo' component={TodoScreen} options={{ headerShown: false }} />
                    <Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                    <Screen name='About' component={AboutScreen} options={{ headerShown: false }} />
                    <Screen name='Contact' component={ContactScreen} options={{ headerShown: false }} />
                </Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;

// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const Tab = createBottomTabNavigator();
// const { Navigator, Screen } = Tab;

// // Components
// import HomeScreen from './src/screens/home-screen/home-screen';
// import AboutScreen from './src/screens/about-screen/about-screen';
// import ContactScreen from './src/screens/contact-screen/contact-screen';

// const App = () => {

//     return (
//         <NavigationContainer>
//             <Navigator>
//                 <Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
//                 <Screen name='About' component={AboutScreen} options={{ headerShown: false }} />
//                 <Screen name='Contact' component={ContactScreen} options={{ headerShown: false }} />
//             </Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;









// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// let Drawer = createDrawerNavigator();
// let { Navigator, Screen } = Drawer;

// Components
// import HomeScreen from './src/screens/home-screen/home-screen';
// import AboutScreen from './src/screens/about-screen/about-screen';
// import ContactScreen from './src/screens/contact-screen/contact-screen';
// import FeedbackScreen from './src/screens/feedback-screen/feedback-screen';

// const App = () => {

//     return (
//         <NavigationContainer>
//             <Navigator>
//                 <Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
//                 <Screen name='About' component={AboutScreen} options={{ headerShown: false }} />
//                 <Screen name='Contact' component={ContactScreen} options={{ headerShown: false }} />
//                 <Screen name='Feedback' component={FeedbackScreen} options={{ headerShown: false }} />
//             </Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;