import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../../Screens/Auth/Login'
import SignUp from '../../Screens/Auth/SignUP'
import Buttom_Navigation from '../Buttom'
const Stack=createNativeStackNavigator();
const Stack_Navigation = () => {
  return (
        
        <NavigationContainer  >
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
    <Stack.Screen name='Home' component={Buttom_Navigation}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}



export default Stack_Navigation
