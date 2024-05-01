import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style'
const Profile = () => {
  return (
    <ImageBackground  style={styles.container} source={require('../../../assets/Profile.png')}>

    </ImageBackground>
  )
}

export default Profile