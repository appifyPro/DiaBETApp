import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { COLORS } from '../../../them/Colors'
import Input from '../../../Component/Text_Input'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation()
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.intro_container}>
                <Text style={styles.intro_text}>
                    The Best {'\n'}DiaBET
                </Text>
            </View>
            <View style={styles.Input_Box_contaier}>
                <SafeAreaView style={styles.SafeAreaView}>

                    <Input 
                    SafeAreaView={styles.inputContainer}  
                    placeholderTextColor={COLORS.darkGrey}
                    placeholder={'User Name'}
                        value={name}
                        onChangeText={(text) => setName(text)} />

                </SafeAreaView>
                <SafeAreaView style={[styles.SafeAreaView2]}>

                    <Input placeholder={'Password'}
                        value={password}
                        SafeAreaView={styles.inputContainer}  
                        placeholderTextColor={COLORS.darkGrey}
                        onChangeText={(text) => setPassword(text)} />

                </SafeAreaView>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}
                 style={styles.login_Button}>
                    <Text style={styles.login_text}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}
                style={styles.signUp_Button}>
                    <Text style={styles.Signup_text}>
                    Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login