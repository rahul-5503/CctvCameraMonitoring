import react from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboading from '../Screens/Onboading';
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator();

const AppStack = () =>{
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={TabNavigation} name="TabNavigation" />
    </Stack.Navigator>
    )
}

export default AppStack;