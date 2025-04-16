import { SafeAreaView, View, Text, TextInput ,TouchableOpacity } from 'react-native'
import React ,{useContext} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';


const Login = ({navigation}) => {
 
    const {login} =  useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal:25 }}>
        <View>
        </View>
            <Text 
                style={{fontSize:20,
                fontWeight:'500',
                color:'#333',
                marginBottom: 30
                }}>Login
            </Text>
        <View style={{ flexDirection:'row', 
                       borderBottomColor:'#ccc',
                       borderBottomWidth:1,
                       paddingBottom:8,
                       marginBottom:25}}>
            <MaterialIcons name='alternate-email' 
            style={{
                marginRight:5
            }}
            size={20} color='#666' />
            <TextInput
                placeholder='Email'
                style={{
                    flex:1,
                    paddingVertical:0
                }}
                keyboardType='email-address'
            />
            
        </View>
        <View style={{ flexDirection:'row', 
                       borderBottomColor:'#ccc',
                       borderBottomWidth:1,
                       paddingBottom:8,
                       marginBottom:25}}>
            <Icons name='lock-closed-outline' 
            style={{
                marginRight:5
            }}
            size={20} color='#666' />
            <TextInput
                placeholder='password'
                style={{
                    flex:1,
                    paddingVertical:0
                }}
                secureTextEntry={true}
            />
            <TouchableOpacity  onPress={()=>{}}>
                <Text style={{color:'#AD40AF',fontWeight:'700'}}>Forget ?</Text>
            </TouchableOpacity>
        </View>
     
     <TouchableOpacity 
     onPress={()=>{login()}}
        style={{
            backgroundColor:'#AD40AF',
            padding:20,
            borderRadius: 10,
            marginBottom:30
        }}>
        <Text
          style={{
            textAlign:'center',
            fontWeight:'700',
            fontSize:16,
            color:'#fff',
          }}>LogIn</Text>
     </TouchableOpacity>
        <Text style={{textAlign:'center',
        color:'#666',
        marginBottom: 30
        }}>Or, LogIn With</Text>
        <View>
        <TouchableOpacity>
            {/* facebook logo google logo*/}
        </TouchableOpacity>
            <MaterialIcons name='facebook' size={40} color='blue'/>
        </View>
       <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
       }}>
       <Text>New To the App?</Text>
       <TouchableOpacity onPress={()=> navigation.navigate('Register')}>  
            <Text style={{
                color:'#AD40AF'
            }}>Register</Text>
        </TouchableOpacity>
       </View>
    </View>
        
    </SafeAreaView>
    
  )
}

export default Login