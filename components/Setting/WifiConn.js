import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert ,Modal } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const connectionTypeData = [
  { label: 'Wi-Fi', value: 'wifi' },
  { label: 'Ethernet', value: 'ethernet' }
];

const WifiConn = () => {
  const [connectionType, setConnectionType] = useState(null);
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [selectedWifi, setSelectedWifi] = useState(null);
  const [password, setPassword] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible,setErrorModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  useEffect(() => {
    if (connectionType === 'ethernet') {
      checkEthernetConnection();
    } else if (connectionType === 'wifi') {
      loadWifiNetworks();
    }
  }, [connectionType]);

  const checkEthernetConnection = async () => {
    try {
      setSuccessModalVisible(true); 
      const response = await fetch('http://192.168.50.5:9098/network_check');
      const data = await response.json();
      setConnectionStatus('Good to Go');
    } catch (error) {
      setConnectionStatus('Check ethernet');
      console.error('failed to connect to ethernet', error);
    }
  };

  const loadWifiNetworks = async () => {
    try {
      const response = await fetch('http://192.168.50.5:9098/display');
      const networks = await response.json();
      const wifilist = networks.map(network => ({
        label:network,
        value: network
      }));
      setWifiNetworks(wifilist);
    } catch (error) {
      setSuccessModalVisible(true);
      //setErrorModalVisible(true); 
     // console.error('Failed to fetch available networks.', error);
    }
  };

  const handleConnect = async () => {
    if (connectionType === 'wifi') {
      try {
        const response = await fetch('http://192.168.50.5:9098/testwifi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            wifiDropdown: selectedWifi,
            passw: password
          })
        });
        setSuccessModalVisible(true);
        if (response.ok) {
          setSuccessModalVisible(true);
          checkEthernetConnection();
        } else {
         // throw new Error('failed to connect to wifi');
        }
      } catch (error) {
        //Alert.alert('Check the wifiConnection')
        console.error(error);
      }
    } 
  };
  const renderLabel = (label, focus) => {
    if (connectionType || focus) {
      return (
        <Text style={[styles.label, focus && { color: 'blue' }]}>
          {label}
        </Text>
      );
    }
    return null;
  };
  const closeModal = () => {
    setErrorModalVisible(false);
    setSuccessModalVisible(false);
  }
  return (
    <View style={styles.container}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MaterialIcons name="error"  size={100} color="#cc0000"/>
            <Text style={styles.modalTitle}>Network Error</Text>
            <Text style={styles.modalText}>Failed to load Wi-Fi networks. Please check your connection and try again.</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <Feather name="check-circle" size={100}  color="green" />
            <Text style={styles.modalTitle}>Success</Text>
            <Text style={styles.modalText}>You are now connected to the network successfully!</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
      {renderLabel("Select connection type", isFocus)}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={connectionTypeData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select connection type' : '...'}
        value={connectionType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setConnectionType(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      
      {connectionType === 'wifi' && wifiNetworks.length > 0 && (
        <>
          {renderLabel("Select Wi-Fi Network", isFocus)}
          <Dropdown
            style={styles.dropdown}
            data={wifiNetworks}
            labelField="label"
            valueField="value"
            placeholder="Select Wi-Fi Network"
            value={selectedWifi}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSelectedWifi(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="wifi-outline"
                size={20}
              />
            )}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Wi-Fi Password"
          />
          <Button title="Connect" onPress={handleConnect} />
        </>
      )}
      <Text>{connectionStatus}</Text>
    </View>
  );
};

export default WifiConn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginVertical: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
