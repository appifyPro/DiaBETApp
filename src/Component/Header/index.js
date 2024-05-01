import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Header = ({title,style,Title_style}) => {
  return (
    <LinearGradient start={{ x: 0, y: -1 }}
    end={{ x: 1, y: 1 }} // Ensuring the gradient is horizontal
    colors={['#CAF2E3', '#5E7168', '#CAF2E3']} // Light green, dark green, light green
    style={styles.header}
        >
        <Text style={Title_style}>
         {title}
        </Text>
    </LinearGradient>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:40,
        width:'100%',
        // borderWidth:1,
        // backgroundColor:'#CAF2E3',
        opacity:.8
    },
    image:{
        height:40,
        width:'100%',
    }
})