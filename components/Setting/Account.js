import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from '../context/AuthContext';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Account = ({ navigation }) => {
    const { logout } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState(null);

    const handleChoosePhoto = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                setProfileImage(source);
            }
        });
    };
    const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        avatarUrl: "https://via.placeholder.com/150"
    };
  

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuItem} onPress={handleChoosePhoto}>
                <View style={styles.imageContainer}>
                    
                    <Text style={styles.menuText}>Head portrait</Text>
                </View>
                <Image
                  style={styles.avatar}
                  source={{ uri: userData.avatarUrl }}
              />
            </TouchableOpacity>
            <View style={styles.menuItem}>
                <Text style={styles.menuText} >Nickname</Text>
                <Text style={styles.menuText}>rahul</Text>
            </View>
            <View style={styles.menuItem}>
               
                <Text style={styles.menuText}>Account</Text>
                <Text>rahul@Squadcube.com</Text>
            </View>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Change Password")}>
                <View style={styles.imageContainer}>
                   
                    <Text style={styles.menuText}>Change Password</Text>
                </View>
                <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} onPress={logout}>
                <View style={styles.imageContainer}>
                    
                    <Text style={{ fontSize: 16,
        paddingLeft: 10,
        color: 'red',}}>Sign Out</Text>
                </View>
                <SimpleLineIcons name='arrow-right' size={15} color='gray'/>
            </TouchableOpacity>
        </View>
    )
}

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
    },
  avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
      //marginRight: 10,
  },
    menuText: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#333',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    icon: {
        marginRight: 10, // To add some space between the icon and the text
    },
});

export default Account;
