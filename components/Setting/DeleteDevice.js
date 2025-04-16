import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Iconicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DeleteDevice = () => {
    const [device, setDevice] = useState(null);
    const [cameradetails, setCameraDetails] = useState([]);

    useEffect(() => {
        // Load data from AsyncStorage when component mounts
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('cameradata');
            if (jsonValue !== null) {
                // If data exists in AsyncStorage, set it to state
                setCameraDetails(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.error('Failed to load data from AsyncStorage:', e);
        }
    };

    const deleteCamera = async (macaddress) => {
        const result = await AsyncStorage.getItem('cameradata');
        let camera = [];
        if (result != null) camera = JSON.parse(result);
        
        const newName = camera.filter(n => n.macaddress !== macaddress);
        await AsyncStorage.setItem('cameradata', JSON.stringify(newName));  
        alert("Delete Successful");
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {cameradetails.map((item, index) => (
                    <View style={styles.deviceName} key={index}>
                        <Iconicons style={{ marginLeft: 10, marginRight: 10 }} name='camera-outline' size={30} />
                        <Text>{item.cameraname}</Text>
                        <Text>{item.cameratypename}</Text>
                        <TouchableOpacity onPress={() => { deleteCamera(item.macaddress) }}>
                            <AntDesign name='delete' size={30} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    deviceName: {
        flexDirection: 'row', 
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
});

export default DeleteDevice;
