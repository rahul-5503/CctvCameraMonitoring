import { SafeAreaView, TouchableOpacity, View, Text ,StyleSheet } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// const Stack = createNativeStackNavigator();
import Login from '../Auth/Login';

const Onboading = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
      
        <View>
          <Text style={{fontSize:30 ,fontWeight: 'bold' ,color: '#20315f'}}>App content</Text>
        </View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Login')}
        style={{backgroundColor:'#AD40AF', 
                padding:20 ,
                width:'90%',
                borderRadius:5,
                flexDirection:'row',
                justifyContent:'space-between'}} 
       // onPress={<Home/>}
        >
          <Text style={{fontWeight:'bold',fontSize:18,color:'#fff'}}>LogIn</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color={'#fff'}/>
        </TouchableOpacity>
  
      </SafeAreaView>
      
    );
  };
  
  
  const  styles= StyleSheet.create({
  
    container:{flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#fff'
  
    }
  });
  

export default Onboading