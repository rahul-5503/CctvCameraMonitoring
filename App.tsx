import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './components/context/AuthContext';
import AppNav from './components/Navigation/AppNav';

const Stack = createNativeStackNavigator();

//rafce
const  App = () => {
  
  return(
    <AuthProvider >
       <AppNav/>
    </AuthProvider>    
  )
}

export default App;
