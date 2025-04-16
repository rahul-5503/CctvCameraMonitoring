import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationTab = ({ navigation }) => {
    const allNotifications = [
        { id: 1, type: 'Password Change', message: 'Your device named cam1 has password is wrong.' },
        { id: 2, type: 'Password Change', message: 'Your password was changed successfully.' },
        { id: 3, type: 'Device Offline', message: 'Your device named cam1 to be offline. Check your connection.' }
    ];

    const [notifications, setNotifications] = useState(allNotifications);
    const [filter, setFilter] = useState('All');

    const handleDismiss = (id) => {
        const filteredNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(filteredNotifications);
    };

    const handleFilter = (filter) => {
        setFilter(filter);
        if (filter === 'All') {
            setNotifications(allNotifications);
        } else {
            setNotifications(allNotifications.filter(notification => notification.type === filter));
        }
    };

    return (
        <ScrollView >
        <Text style={styles.title}>Notifications </Text>
        
        <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#bd3ca3' }]} onPress={() => handleFilter('All')}>
                    <Text style={styles.buttonText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#bd3ca3' }]} onPress={() => handleFilter('Device Offline')}>
                    <Text style={styles.buttonText}>Offline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#bd3ca3' }]} onPress={() => handleFilter('Password Change')}>
                    <Text style={styles.buttonText}>Password</Text>
                </TouchableOpacity>
            </View>
    
        <View styles={styles.container}>
        
            {notifications.map((notification) => (
                <View key={notification.id} style={styles.notificationCard}>
                    <Text style={styles.notificationType}>{notification.type}</Text>
                    <Text style={styles.notificationMessage}>{notification.message}</Text>
                    <TouchableOpacity onPress={() => handleDismiss(notification.id)} style={styles.dismissButton}>
                        <Text style={styles.dismissButtonText}>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {notifications.length === 0 && (
                <Text style={styles.noNotificationsText}>No new notifications.</Text>
            )}
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: '#AD40AF', // Example: blue background color
        color: '#FFFFFF', // Optional: changing text color to white for better readability
        padding: 15, // Optional: adding some padding to make it look better
    },buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
    },
    notificationCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginLeft:10,
        marginRight:10,
    },
    notificationType: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    notificationMessage: {
        fontSize: 14,
        marginBottom: 10,
    },
    dismissButton: {
        alignItems: 'flex-end',
    },
    dismissButtonText: {
        color: '#007BFF',
        fontSize: 16,
    },
    noNotificationsText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    
});

export default NotificationTab;
