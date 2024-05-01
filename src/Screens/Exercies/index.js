import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style'

const Exercise = () => {
  return (
   <ImageBackground  style={styles.container} source={require('../../../assets/Exercise.png')}>
<View style={styles.detail_container}>
<View style={styles.text_container}>
<Text style={styles.text}>
Future Development
</Text>
</View>
</View>
   </ImageBackground>
  )
}

export default Exercise