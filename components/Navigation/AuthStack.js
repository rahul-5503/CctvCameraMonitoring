import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboading from '../Screens/Onboading';
import Login from '../Auth/Login'
import Register from '../Auth/Register';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Onboading} name="Onboading"/>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
    </Stack.Navigator>
  )
}

export default AuthStack