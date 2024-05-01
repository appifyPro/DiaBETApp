import { View, Text } from 'react-native'
import React from 'react'
import Stack_Navigation from './src/Navigations/Stack'
import Login from './src/Screens/Auth/Login'

const App = () => {
  return (
  <View style={{flex:1,}}>
    <Stack_Navigation/>
    {/* <Login/> */}
  </View>
  
  )
}

export default App