import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style'
import Header from '../../../Component/Header'
import Input from '../../../Component/Text_Input'
import { COLORS } from '../../../them/Colors'
import { useNavigation } from '@react-navigation/native'
import RBSheet from 'react-native-raw-bottom-sheet'

const SignUp = () => {
  const [user, setUser] = useState('');
  const [linkUser, setLinkUser] = useState('');
  const [linkPassword, setLinkPassword] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('')
  const navigation = useNavigation();
  const refRBSheet = useRef();
  return (
    <ImageBackground source={require('../../../../assets/SignUp.png')} style={styles.container}>
      {/* <Header/> */}
      <View style={styles.Text_Field_Container}>
        <View style={styles.inputBox_container}>
          <SafeAreaView style={styles.SafeAreaView}>
            <Input
              placeholder={'User Name'}
              placeholderTextColor={COLORS.darkGrey}
              SafeAreaView={styles.inputContainer}

              value={user}
              onChangeText={(text) => setUser(text)}
            />

          </SafeAreaView>
          <SafeAreaView style={styles.SafeAreaView}>
            <Input
              placeholder={'Password'}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={COLORS.darkGrey}
              SafeAreaView={styles.inputContainer}
            />

          </SafeAreaView>
          <SafeAreaView style={styles.SafeAreaView}>
            <Input
              placeholder={'First Name'}
              value={firstname}
              onChangeText={(text) => setFirstname(text)}
              placeholderTextColor={COLORS.darkGrey}
              SafeAreaView={styles.inputContainer}
            />

          </SafeAreaView>
          <SafeAreaView style={styles.SafeAreaView}>
            <Input
              placeholder={'Last Name'}
              value={lastname}
              onChangeText={(text) => setLastname(text)}
              placeholderTextColor={COLORS.darkGrey}
              SafeAreaView={styles.inputContainer}
            />

          </SafeAreaView>
          <SafeAreaView style={styles.SafeAreaView}>
            <Input
              placeholder={'Email'}

              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={COLORS.darkGrey}
              SafeAreaView={styles.inputContainer}
            />

          </SafeAreaView>
          <View style={styles.discription_container}>
            <Text style={styles.discription}>
              The Best DiaBET provides recommendations based on your specific interests please fill out the provided survey and/or allow The Best DiaBET access to your social media to enable better recommendations.
            </Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Survey')} style={styles.survey_container}>
            <Text style={styles.survey_text}>
              Fill out Survey
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.survey_container}>
            <Text style={styles.survey_text}>
              Link Social Media
            </Text>
          </TouchableOpacity>
          <View style={styles.Signup_button_container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
              style={styles.singup_button}>
              <Text style={styles.signup_Text}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <RBSheet
        ref={refRBSheet}
        openDuration={3000}
        customStyles={{
          container: {
            height: 357,
            width: '100%',
            alignSelf: 'center',
            // marginBottom:200,
            backgroundColor: '#F5F5F5'
          }
        }}>
        <View style={styles.discription_box}>
          <Text style={styles.discription_text}>
            Select Social Media site {'\n'}then enter user name and password
          </Text>
        </View>
        <View style={styles.icon_container}>
          <TouchableOpacity>
            <Image source={require('../../../../assets/fb.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../../assets/pin.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../../assets/tt.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../../assets/yt.png')} />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.SafeAreaView1}>

          <Input
            SafeAreaView={styles.inputContainer1}
            placeholderTextColor={COLORS.darkGrey}
            placeholder={'User Name'}
            value={linkUser}
            onChangeText={(text) => setLinkUser(text)}
          />

        </SafeAreaView>
        <SafeAreaView style={[styles.SafeAreaView2]}>

          <Input placeholder={'Password'}
            value={linkPassword}
            SafeAreaView={styles.inputContainer1}
            placeholderTextColor={COLORS.darkGrey}
            onChangeText={(text) => setLinkPassword(text)}
          />

        </SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.Link_button}>
          <Text style={styles.Link_text}>
            Link
          </Text>
        </TouchableOpacity>
      </RBSheet>
    </ImageBackground>
  )
}

export default SignUp