import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell your old crap. Is this centered</Text>
      </View>
      <View style={styles.login} />
      <View style={styles.register} />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  login: {
    height: 70,
    width: '100%',
    backgroundColor: colors.secondary,
  },
  register: {
    height: 70,
    width: '100%',
    backgroundColor: colors.primary,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
  },
})
