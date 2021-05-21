import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AppContext from '../components/context/AppContext';
import CommentScreen from '../screens/CommentScreen';
import HomeScreen from '../screens/HomeScreen';

import * as users from '../utilities/usersData';

const AppStack = createStackNavigator();

const AppScreens = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomeScreen} />
    <AppStack.Screen name="Comments" component={CommentScreen} />
  </AppStack.Navigator>
);

function AppNavigator() {
  const [user, setUser] = useState(users?.DATA?.[0]);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}>
      <NavigationContainer>
        <AppScreens />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default AppNavigator;
