//rafce
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Iconicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    const imageSource = require('../img/gallery_1_7.jpg');
    const [cameradetails, setCameraDetails] = useState([]);
    const [Offline, isOffline] = useState(true);

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

    const HandleSetting = (cameraDetails) => {
        return (
            navigation.navigate("CamDetails",{cameraDetails})
        )
    };

    const HandlePress = async (cameraDetails) => {
        // const response= await axios.post('')
        return (
            navigation.navigate('Video',{cameraDetails})
        )
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                {cameradetails.map((item, index) => (
                    <View style={styles.card} key={index}>
                        <View
                            style={{
                                flexDirection: 'row',
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1,
                                paddingBottom: 8,
                                marginTop: 10,
                                marginBottom: 10
                            }}>
                            <Iconicons style={{
                                marginLeft: 10, marginRight: 10
                            }} name='camera-outline' size={30}/>
                            <Text style={styles.title}>{item.cameraname}</Text>
                            <Text >{item.macaddress}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => { HandlePress(item) }}
                        >
                            <Image style={styles.image} />
                            {Offline ? <View style={styles.overlay} >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 25,
                                        color: '#fff',
                                    }}
                                >Online</Text></View> : null}

                        </TouchableOpacity>

                        <View
                            style={{
                                flexDirection: 'row',
                                borderBottomColor: '#ccc',
                                borderTopWidth: 1,
                                paddingTop: 8,
                                paddingBottom: 8,
                                marginTop: 10,
                                marginBottom: 10,
                                justifyContent: 'space-evenly'
                            }}>
                            <TouchableOpacity
                                onPress={() => { HandlePress() }}
                            >
                                <Iconicons style={{
                                    marginLeft: 10, marginRight: 10
                                }} name='camera-outline' size={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { HandlePress() }}
                            >
                                <Iconicons style={{
                                    marginLeft: 10, marginRight: 10
                                }} name='cloud-outline' size={30}/>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { HandleSetting(item) }}
                            >
                                <Iconicons style={{
                                    marginLeft: 10, marginRight: 10
                                }} name='settings-outline' size={30}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { HandlePress() }}>
                                <Iconicons style={{
                                    marginLeft: 10, marginRight: 10
                                }} name='star-outline' size={30}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        marginVertical: 10,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        resizeMode: 'cover',
    },
    title: {
        flex: 1,
        paddingVertical: 0,
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity (last value) to control the blur intensity
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
