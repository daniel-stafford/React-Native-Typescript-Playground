import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ViewImageScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.redBox} />
      <View style={styles.greenBox} />
      <Image style={styles.chair} source={require('../assets/chair.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: 30,
    left: 10,
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 30,
    right: 10,
  },
  chair: {
    height: '70%',
    width: '100%',
  },
})
