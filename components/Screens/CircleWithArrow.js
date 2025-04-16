import React, { useState ,useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CircleWithArrows = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;


  return (
    <View style={styles.container}>
    <View style={styles.circle} >
    <Animated.View
       style={[    
        styles.cursor,
            {
              transform: [{ translateX: pan.x  }, { translateY: pan.y }],
            },
          ]} {...panResponder.panHandlers}>

    </Animated.View>
    <MaterialIcons name="keyboard-arrow-up" size={30} color="#000" style={styles.arrowTop} />
        <MaterialIcons name="keyboard-arrow-down" size={30} color="#000" style={styles.arrowBottom} />
        <MaterialIcons name="keyboard-arrow-left" size={30} color="#000" style={styles.arrowLeft} />
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#000" style={styles.arrowRight} />
     
    </View>
        <View
         
        />
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  cursor: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: 'lightblue',
    position: 'relative',
    left:"32 %",
    top:'68%'
    
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100, // half of width and height to make it a circle
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  arrowTop: {
    position: 'absolute',
    top: 5,
  },
  arrowBottom: {
    position: 'absolute',
    bottom: 5,
  },
  arrowLeft: {
    position: 'absolute',
    left: 5,
  },
  arrowRight: {
    position: 'absolute',
    right: 5,
  },
});

export default CircleWithArrows;
