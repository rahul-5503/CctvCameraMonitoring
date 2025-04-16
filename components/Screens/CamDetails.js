import React,{useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const CamDetails = ({route}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { cameraDetails } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailSection}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{cameraDetails.cameraname}</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{cameraDetails.ipAddress}</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.label}>User Name</Text>
        <Text style={styles.value}>{cameraDetails.camerausername}</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.label}>Camera Password</Text>
        <View style={styles.passwordContainer}>
          <Text style={styles.value}>{showPassword ? cameraDetails.camerapassword : '***********'}</Text>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.label}>CameraType</Text>
        <Text style={styles.value}>{cameraDetails.cameratypename}</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.label}>Port</Text>
        {(cameraDetails.cameratypename == 'Hikvision')?(
          <Text style={styles.value}>10800</Text>
        ):(
          <Text style={styles.value}>21400</Text>
        )
        }
       
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',  
  },
  detailSection: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  value: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  }, passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default CamDetails;
