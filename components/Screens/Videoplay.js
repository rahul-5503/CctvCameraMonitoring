import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ActivityIndicator, BackHandler } from 'react-native';
import Video from 'react-native-video';
import Iconicons from "react-native-vector-icons/Ionicons";

const Videoplay = ({ navigation: { goBack }, route }) => {
  const { cameraDetails } = route.params;
  const { height } = Dimensions.get("window");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sendStopStreamRequest = async () => {
      try {
        await fetch('http://122.178.10.57:9098/stop_stream', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error('Error sending stop stream request:', error);
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log("In backhandler");
      sendStopStreamRequest();
      goBack();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };
   //const videoplayurl =`http://192.168.1.13:9098/video_feed/${cameraDetails.macaddress}`;
  //http://122.174.123.35:9098/video_feed/${cameraDetails.macaddress}
  // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/forbiggermeltdowns.mp4

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: `http://122.178.10.57:9098/video_feed/${cameraDetails.macaddress}`
          }}
          style={styles.video}
          onLoad={handleLoad}
          onError={(error) => console.error("video play error:", error)}
        />
        
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        {/* Bottom Half of the Screen */}
        {/* Add your components for the bottom half here */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0efec',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '40%',
    position: 'relative', // Necessary for absolute positioning inside
  },
  video: {
    position: 'absolute', // To cover the whole container
    margin:10,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height:'80%',
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomContainer: {
    width: '100%',
    height: '60%',
    backgroundColor: '#ffffff', // Blank area
  }
});

export default Videoplay;
