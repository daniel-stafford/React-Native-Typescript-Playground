import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  View,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native'
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks'

export default function App() {
  // console.log(Platform.OS, Dimensions.get('screen'))
  console.log(Platform.OS, useDeviceOrientation(), useDimensions())
  const { landscape, portrait } = useDeviceOrientation()
  const handlePress = () => console.log('handle press running')
  return (
    // can pass array of styles, rightmost overrides
    // SafeAreaView, an ios only feature, prevents text from conflicting with bezel in new iPhone
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          width: landscape ? '100%' : '50%',
          height: 100,
          backgroundColor: 'dodgerblue',
          flex: 0,
        }}
      ></View>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <TouchableHighlight onPress={() => console.log('image tapped')}>
        <Image
          fadeDuration={1000}
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }}
        />
      </TouchableHighlight>
      {/* native feeback only works on android */}
      <TouchableNativeFeedback>
        <View
          style={{ width: '50%', height: 100, backgroundColor: 'dodgerblue' }}
        ></View>
      </TouchableNativeFeedback>
      <Button
        title={'Press me'}
        color={'green'}
        onPress={() =>
          Alert.alert('My tile', 'Do you like react Native', [
            { text: 'Yes', onPress: () => console.log('yes') },
            { text: 'No', onPress: () => console.log('no') },
          ])
        }
      ></Button>
      <Button
        title={'Prompt me'}
        color={'purple'}
        onPress={() =>
          // alert.prompt only works on IOS at the moment
          Alert.prompt('Questions', "What's your favorite food", text =>
            console.log(text),
          )
        }
      ></Button>
    </SafeAreaView>
  )
}
// can create styles with plan obj but no validation nor optimization
const containerStyle = { backgroundColor: 'orange' }
// StyleSheet.create allows for validation, future optimization
// also conventional to define styles in same file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
