import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../../Component/Text_Input'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS } from '../../../them/Colors'
import { useNavigation } from '@react-navigation/native'

const Community1 = () => {
  const [post, setPost] = useState('');
  const navigation=useNavigation();
  const data=[
    {
      username:'User Name 123',
      userSlice:'A',
      ImageBackground:require('../../../../assets/A.png') ,
      discription:' Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
    },
    {
      username:'User Name 456',
      userSlice:'D',
      ImageBackground:require('../../../../assets/D.png') ,

      discription:' Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
    },
    {
      username:'User Name 789',
      userSlice:'H',
      ImageBackground:require('../../../../assets/G.png') ,

      discription:' Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
    },
    {
      username:'User Name 156',
      userSlice:'S',
      ImageBackground:require('../../../../assets/A.png') ,

      discription:' Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
    },
    {
      username:'User Name 326',
      userSlice:'U',
      ImageBackground:require('../../../../assets/D.png') ,

      discription:' Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
    },


  ]
  return (
    <ImageBackground style={styles.container} source={require('../../../../assets/Community.png')}>
      <View style={styles.header_title_container}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Community2')}
         style={styles.icon_container}>
          <Image source={require('../../../../assets/back.png')} />
        </TouchableOpacity>
        <View style={styles.text_title}>
          <Text style={styles.title}>
            Black Girl Magic
          </Text>
        </View>
      </View>
      <View style={styles.Detail_Container}>
        <SafeAreaView style={styles.SafeAreaView}>
          <Input
            placeholder={'Write post here...'}
            placeholderTextColor={COLORS.darkGrey}
            SafeAreaView={styles.inputContainer}

            value={post}
            onChangeText={(text) => setPost(text)}
          />

        </SafeAreaView>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button_Box}>
            <Text style={styles.button_title}>
              Post as myself
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2_Box}>
            <Text style={styles.button_title}>
              Post anonymously</Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView style={{marginBottom:15,}}> */}

     
        <FlatList
        data={data}
        renderItem={({item})=>{
          return(
            <View style={styles.post_user}>
          <View style={styles.user_detail}>
          <ImageBackground source={item.ImageBackground} style={styles.user_profile}>
              <Text style={styles.user_Slice}>
                {item.userSlice}
              </Text>
            </ImageBackground>
            <View style={styles.user_name_box}>
              <Text style={styles.userName}>
               {item.username}
              </Text>
            </View>
          </View>
          <View style={styles.details_container}>
            <Text style={styles.detail_post}>
           {item.discription}
            </Text>
          </View>
        </View>
          )
        }}/>
           {/* </ScrollView> */}
      </View>
    </ImageBackground>
  )
}

export default Community1