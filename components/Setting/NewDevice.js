import React, { useEffect, useState } from 'react';
import {Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert ,ActivityIndicator } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios'; // Don't forget to install axios if you haven't yet: npm install axios
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';

const cameraType = [
  { label: 'Cp-Plus', value: '0' },
  { label: 'Hikvision', value: '1' },
  { label: 'Dahua', value: '2' },
];

const NewDevice = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mac, setMac] = useState('');
  const [selectedType, setSelectedType] = useState(null);
  const [loading,setLoading]=useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const imageSource = require('../img/gallery_1_7.jpg') 
  const [Offline ,isOffline]= useState(true);
  
  useEffect(()=>{
    setLoading(false);
  })
  const handleSubmit = async() => {
    setLoading(true);
    const check = await AsyncStorage.getItem('cameradata')
    let notes =[]

    if (check != null) notes = JSON.parse(check)
      
    const data = {
      name,
      username,
      password,
      macaddress:mac,
      cameratype: selectedType
    };
    console.log(selectedType,mac);
    try {
      const response = await axios.post('http://122.178.10.57:9098/submit', data);
      if (response.status === 200) {
        let cameraTypeName;
        if (selectedType == '0') {
          cameraTypeName = 'Cp-Plush';
        } else if (selectedType == '1') {
          cameraTypeName = 'Hikvision';
        } else {
          cameraTypeName = 'Dahua';
        }
        //in the future to show the video for the user check
       //const ipaddress = response.data.ipaddress;
        const storeData = {
          "macaddress": mac,
          "cameraname": name,
          "cameratypename": cameraTypeName,
          "camerausername": username,
          "camerapassword": password,
          "ipAddress": response.data.ipaddress
        };
        console.log(storeData);

        checkasyncstorage("cameradata", storeData);
        setSuccessMessage('Data submitted successfully.'); // Set success message
        Alert.alert('Data submitted successfully.')
      } else {
        Alert.alert('Error submitting data. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      Alert.alert('Error submitting data. Please try again later.');
    }finally{
      setLoading(false);
    }
    //const video_feed =await axios.post(`htps://192.168.1.13:9098/video_feed/${mac}/${ipaddress}`)
  };

 
  const checkasyncstorage = async (key, data) => {
    try {
      let existingData = await AsyncStorage.getItem(key); // Get existing data from AsyncStorage
      if (existingData !== null) {
        // If data exists, parse it from JSON
        existingData = JSON.parse(existingData);
        // Append new data to existing data
        existingData.push(data);
        // Store updated data back to AsyncStorage
        await AsyncStorage.setItem(key, JSON.stringify(existingData));
      } else {
        // If no existing data, create a new array with the new data
        await AsyncStorage.setItem(key, JSON.stringify([data]));
      }
      console.log('Data stored successfully!');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };
  
   
  return (
    <View style={styles.container}>
       {loading ? (
        <ActivityIndicator size="large" color="#0000ff" backgroundColor="#eae9ee"/> // Show loading indicator
      ) : (
        <>
          
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter camera nickname"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter camera username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Camera Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true} // To hide password input
      />
    
      <TextInput
        style={styles.input}
        placeholder="Enter Camera Mac Address"
        onChangeText={setMac}
        value={mac}
      />
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        data={cameraType}
        labelField="label"
        valueField="value"
        placeholder="Select camera type"
        value={selectedType}
        onChange={item => {
          setSelectedType(item.value);
        }}
      />
      <View style={{marginBottom:15}}>
      {Offline ? <View style={styles.overlay} >
              <Text
              style={{
                fontWeight:  "bold",
                fontSize:25,
                color:'#fff',
                
              }}
              ></Text></View> : null}
      
      </View>
              
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20
  },
  dropdownContainer: {
    marginBottom: 20
  },
  button: {
    backgroundColor: '#AD40AF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    //opacity:0.2,
    //blurRadius:50,
    resizeMode: 'cover',
  },  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity (last value) to control the blur intensity
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default NewDevice;
