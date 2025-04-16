import React from 'react'
import {View,Text ,TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile'
import Notification from '../Screens/Notification';
import Inconicons from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather"
import { NavigationContainer ,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Video from '../Screens/Videoplay';
import CamDetails from '../Screens/CamDetails';
import NewDevice from '../Setting/NewDevice';
import DeleteDevice from '../Setting/DeleteDevice';
import WifiConn from '../Setting/WifiConn';
import Personal from '../Setting/Account';
import ChangePass  from '../Setting/ChangePass';
import Settings from '../Setting/Settings';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// if u want to move around in the tab
// home screen add stack navigator
//in it 
/*
 return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={home} name="Main" options={{headerShown:false}}/>
        <Stack.Screen component={videoplay} name="TabNavigation" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}*/

const HomeNav = (route) => {
    const color = 'white';
    const size = 30;
    const navigation = useNavigation();
    return(
        
          <Stack.Navigator>
            <Stack.Screen component={Home} name="Home" options={{
                title:'Home',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },
                  
                  }}/>
            <Stack.Screen component={Video} name="Video"
              //to send a title to video page     
            options={({route})=>({
                title: route.params?.title,
            })} />
            <Stack.Screen component={CamDetails} name="CamDetails"
                options={({route})=>({
                title:'Device Information',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },
                  
                  })}/>
            
          </Stack.Navigator>
      )
}

const SettingsNav = (route) =>{
     const color = 'white';
    const size = 30;
    return(
        <Stack.Navigator>
            <Stack.Screen component={Profile} name="Setting"
                 options={{
                title:'Profile',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },
                  }}/>
            <Stack.Screen component={NewDevice} name="NewDevice"
                 options={{
                //title:'Home',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },
                  }}/>
            <Stack.Screen component={DeleteDevice} name="DeleteDevice"/>
            <Stack.Screen component={WifiConn} name="WifiConn"
                 options={{
                //title:'Home',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },
                  headerTitle: props => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'  }}>
            <Text style={{color: 'white' ,fontSize:20 }}>WifiConnection</Text>
            </View>
          ),
                  }}
            />
            <Stack.Screen component={Personal} name="Personal"
                 options={{
                title:'Account',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },}}/>
            <Stack.Screen component={ChangePass} name="Change Password"
                 options={{
                title:'Personal Info',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },}}/>
            <Stack.Screen component={Settings} name="settings"
                 options={{
                title:'Settings',
                headerStyle:{
                    backgroundColor: '#AD40AF',   
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold', 
                  },}}/>
            
        </Stack.Navigator>

    )
}

const MyTabs =()=>{
    return(
        <Tab.Navigator screenOptions={{
            //tabBarShowLabel:false,
            headerShown:false,
            tabBarStyle:{backgroundColor:'#AD40AF'},
            tabBarInActiveTintColor:"#fff",
            tabBarActiveTintColor:'white'
        }}>
            <Tab.Screen name="home" 
            component={HomeNav}
                options={({route})=>({
                        tabBarStyle:{display:getTabBar(route),backgroundColor:'#AD40AF'},
                        tabBarIcon: ({ color, size }) => (
                    <Inconicons name='home-outline' color={color} size={size} />
                ),
                headerShown:false,
            })}/>
            <Tab.Screen name="Profile" 
            component={SettingsNav}
                 options={({route})=>({
                        tabBarStyle:{display:getTabBar(route),backgroundColor:'#AD40AF'},
                        tabBarIcon: ({ color, size }) => (
                    <Inconicons name='settings-outline' color={color} size={size} />
                ),
                headerShown:false,
                })}/>
            <Tab.Screen name="Notification" component={Notification}
                 options={({route})=>({
                    title:'Notifications',
                    
                    tabBarStyle:{display:getTabBar(route),backgroundColor:'#AD40AF'},
                        tabBarIcon: ({ color, size }) => (
                    <Inconicons name='notifications-outline' color={color} size={size} />
                    ),
                    // headerShown:false,
                    //notification
                    tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: 'white'},
                    //
                    tabBarIcon: ({ color, size }) => (
                    <Inconicons name='notifications-outline' color={color} size={size} />
                )})}
            />
        </Tab.Navigator>
    )
}
//to removie the tab bar in video page
const getTabBar=(route)=>{
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
   // console.log(route);
    console.log(routeName);
    
    if (routeName === 'Video' || routeName === 'CamDetails' || routeName ==='NewDevice' || routeName === 'DeleteDevice' || routeName === 'WifiConn' || routeName === 'Personal' || routeName === 'Change Password' || routeName === 'settings'){
        console.log(routeName);
        return "none";
    }
    
    else return "flex";
}

export default MyTabs