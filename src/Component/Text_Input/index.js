import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../them/Colors'
import { FONTS } from '../../them/Fonts'

const Input = ({placeholder,onChangeText,value,placeholderTextColor,SafeAreaView}) => {
  return (
    <View style={SafeAreaView}>
       
    <TextInput style={styles.input} 
    placeholderTextColor={placeholderTextColor}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    />
    
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 20,
        marginLeft:5,
        // backgroundColor:'red',
      },
      input: {
        position:'absolute',
        color:COLORS.black,
        fontFamily:FONTS.MavenProMidum,
        top:-15,
        width:'100%'
      },
      
})