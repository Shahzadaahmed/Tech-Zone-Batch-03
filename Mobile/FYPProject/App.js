import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

import HomeScreen from './src/components/home/home';
import Login from './src/components/login/login';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux'
import store from './src/redux/store/store';

const App = () => {

  // States...!
  const [checkAuthStatus, setCheckAuthStatus] = useState(null);

  // Note: Fetching data from redux...!
  const fetchAuthStatus = useSelector(({ authStates }) => { authStates.authUser });
  console.log('Auth status: ', fetchAuthStatus);

  const authChecker = async () => {
    try {
      let fetchData = await AsyncStorage.getItem("AuthState");
      fetchData = JSON.parse(fetchData);
      console.log('Data:', fetchData);
      fetchData && setCheckAuthStatus(fetchData);
    }

    catch (error) {
      console.log("Something went wrong while fetching data: ", error);
    };
  };

  // useEffect(() => {
  //   authChecker();
  // }, []);

  return (
    <NavigationContainer>
      {
        (checkAuthStatus)
          ?
          (
            <Navigator>
              <Screen name='home' component={HomeScreen} />
            </Navigator>
          )
          :
          (
            <Navigator>
              <Screen name='login' component={Login} />
            </Navigator>
          )

      }
    </NavigationContainer>
  );
}


const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper;


// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
// const { Navigator, Screen } = Stack;

// Components:
// import Dashboard from './src/components/dashboard/dashboard';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Navigator screenOptions={{ headerShown: false }}>
//         <Screen name='dashboard' component={Dashboard} />
//       </Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;