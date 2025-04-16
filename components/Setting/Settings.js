import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("WifiConn")}>
        <Feather name='wifi' size={23} color='#0063ff'/>
        <Text style={styles.menuText}>Wifi Connections</Text>
        <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("NewDevice")}>
        <AntDesign name='plussquareo' size={23} color='#1fd655' />
        <Text style={styles.menuText}>New Device</Text>
        <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("DeleteDevice")}>
        <AntDesign name='delete' size={23} color='black' />
        <Text style={styles.menuText}>Delete Device</Text>
        <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Reboot")}>
  <View style={styles.iconContainer}>
    <AntDesign name='reload1' size={23} color='black'/>
  </View>
  <View style={styles.textContainer}>
    <Text style={{color:'#ff4433'}}>Reboot Device</Text>
    <Text style={styles.subText}>Delete all information in the device, including </Text>
    <Text style={styles.subText}>Wifi details</Text>
  </View>
  <SimpleLineIcons name='arrow-right' size={15} color='gray' style={styles.arrowIcon}/>
</TouchableOpacity>

<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("CancelAccount")}>
  <View style={styles.iconContainer}>
    <MaterialCommunityIcons name='account-cancel' size={23} color='red'/>
  </View>
  <View style={styles.textContainer}>
    <Text style={{color:'#ff4433'}}>Cancel Account</Text>
    <Text style={styles.subText}>Submit application, delete all data, and permanently </Text>
    <Text style={styles.subText}>cancel your account.</Text>
  </View>
  <SimpleLineIcons name='arrow-right' size={15} color='gray' style={styles.arrowIcon}/>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
   // backgroundColor: '#fff'  // Ensuring a contrasting background
  },
  menuText: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    color: '#333', // Ensuring text color is visible
    //borderColor: 'orange', // Debugging border
    //borderWidth: 1  // Debugging border
  },
  iconContainer: {
    width: 30, 
    alignItems: 'center',
   // borderColor: 'red', // Temporary border color for debugging
    //borderWidth: 1 // Temporary border width for debugging
  },
  textContainer: {
    flex: 1,
    paddingLeft: 6,
   // borderColor: 'blue', // Temporary border color for debugging
    //borderWidth: 1 // Temporary border width for debugging
  },
  subText: {
    fontSize: 12,
    color: '#666',
    paddingTop: 5,
  },
});

export default Settings;
