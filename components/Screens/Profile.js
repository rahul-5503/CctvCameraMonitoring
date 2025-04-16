import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Profile = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const userData = {
      name: "Rahul Krishna ",
      email: "rahul@Squadcube.com",
      avatarUrl: "../img/gallery_1_7.jpg"
  };
 // const imageSource = require('../img/gallery_1_7.jpg') 
  return (
    
        <View style={styles.container}>
          <View style={styles.profileContainer}>
              <Image
                  style={styles.avatar}
                  source={require('../img/profile1.jpg')}
              />
              <View style={styles.userInfo}>
                  <Text style={styles.userName}>{userData.name}</Text>
                  <Text style={styles.userEmail}>{userData.email}</Text>
              </View>
          </View>

          <View style={styles.menuContainer}>
             
             <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate("Personal") }}>
                  <MaterialIcons name='security' size={23} color='green'/>
                  <Text style={styles.menuText}>Account & Security</Text>
                  <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => { /* Navigation logic here */ }}>
                  <AntDesign name='message1' size={23} color='blue'/>
                  <Text style={styles.menuText}>Online Support</Text>
                  <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
              </TouchableOpacity>              
             
             <View style={styles.sectioncontainer}>
                 <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate("settings") }}>
                      <AntDesign name='setting' size={23}  color="blue" />
                      <Text style={styles.menuText}>Settings</Text>
                      <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
                  </TouchableOpacity>                  
             </View>
            
             <View style={styles.sectioncontainer}>
                  <TouchableOpacity style={styles.menuItem} onPress={() => { /* Navigation logic here */ }}>
                      <MaterialIcons name='help-outline' size={23} color='#F8DE7E'/>
                      <Text style={styles.menuText}>Help</Text>
                      <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
                  </TouchableOpacity>                  
             
                <TouchableOpacity style={styles.menuItem} onPress={() => { /* Navigation logic here */ }}>
                    <Entypo name='info-with-circle' size={23}  color="blue" />
                    <Text style={styles.menuText}>About</Text>
                    <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
                </TouchableOpacity>
             </View>
         </View>
        </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#EFEFF3',
  },
  profileContainer: {
      flexDirection: 'row',
      paddingTop:20,
      marginTop: 10,
      paddingBottom:30,
      marginBottom: 10,
      //height:'25%',
      width: '100%',  // Ensure full width
      paddingHorizontal: 20,  // Add padding to match other content
      backgroundColor:'#EFEFF3',
  },
  avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 20,
  },
  userInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
  },
  userName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },
  userEmail: {
      fontSize: 16,
      color: '#666',
  },
  menuContainer: {
      alignSelf: 'stretch',  // Stretch to fill the available horizontal space
      width: '100%',  // Full width
      paddingLeft: 20,  // Maintain padding from the left
      paddingRight: 20,  // Padding right to align with other contents
     // paddingBottom:20,
      backgroundColor:'white',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
    width: '100%',
    
},
menuText: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,  // Space between icon and text
    color: '#333',  // Optional: you can adjust the text color
},
sectioncontainer:{
    //color: '#eee',
    paddingTop:20,
    width:'100%'
},
  button: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 5,
      marginVertical: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 4,
      width: '90%',  // Consistent with full-width theme but slightly inset
      alignItems: 'center',
  },
  buttonText: {
      color: '#007BFF',
      fontSize: 16,
      fontWeight: 'bold',
  }
});

export default Profile;
