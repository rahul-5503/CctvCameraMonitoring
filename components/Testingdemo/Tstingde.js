import {Text , StyleSheet, View, TouchableOpacity ,FlatList } from 'react-native';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';

const Testingde =({navigation})=>{
    const [cameradetails , setCameraDetails] = useState([
        {macaddress:'123134',cameraname:'af',id:'2'},
        {macaddress:'adsf2q2',cameraname:'adfds',id:'s'},
    ]);
    
    
  const HandleSetting =() =>{
    return(
      navigation.navigate("CamDetails")
    )
  }

  const HandlePress = async() =>{
   const data=[]
    return(
      navigation.navigate('Video', {title:'cam 1'} ,item)  //item in the parameter havecameradetails
    )
  }

   return(
    <View>
      <View>
          <FlatList 
          data={cameradetails}
          renderItem={({item}) =>(
            <View>
            <Text>{title}</Text>
            <Image><source>{url}</source></Image>
            <TouchableOpacity 
                  onPress={()=>{HandlePress()}}
                  >
                      <Iconicons style={{ 
                  marginLeft:10,marginRight:10}} name='camera-outline' size={30}/>
                  </TouchableOpacity>
                 <TouchableOpacity 
                  onPress={()=>{HandlePress()}}
                  >
                  <Iconicons style={{ 
                  marginLeft:10,marginRight:10}} name='cloud-outline' size={30}/>
                  </TouchableOpacity>
                  
                 <TouchableOpacity 
                  onPress={()=>{HandleSetting()}}
                  >
                    <Iconicons style={{ 
                  marginLeft:10,marginRight:10}} name='settings-outline' size={30}/>
                  </TouchableOpacity>
                 <TouchableOpacity 
                  onPress={()=>{HandlePress()}}>
                  <Iconicons style={{ 
                  marginLeft:10,marginRight:10}} name='star-outline' size={30}/>
                  </TouchableOpacity>
            </View>
          )} />
      </View>
       
    </View>
   ) 
}

export default Testingde;