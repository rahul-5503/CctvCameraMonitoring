import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ChangePass = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [renewPassword, setReNewPassword] = useState('');

    const handleSave = () => {
        // Add password validation logic here
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter Old Password'
                onChangeText={text => setOldPassword(text)}
                value={oldPassword}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter New Password'
                onChangeText={text => setNewPassword(text)}
                value={newPassword}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder='Re-enter New Password'
                onChangeText={text => setReNewPassword(text)}
                value={renewPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>Instructions:</Text>
                <Text>- Original Password is the password you used to log in.</Text>
                <Text>
                    - Password format: length must be between 8-31 characters. Only alphanumeric characters are allowed,
                    and the letters are case-sensitive.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    saveButton: {
        backgroundColor: '#48BBEC',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    instructionsContainer: {
        marginTop: 20,
    },
    instructionsTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default ChangePass;
