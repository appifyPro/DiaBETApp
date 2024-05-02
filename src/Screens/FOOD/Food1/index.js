import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../../Component/Text_Input'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS } from '../../../them/Colors'
import { useNavigation } from '@react-navigation/native'

const Food1 = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const data = [
    {
      username: 'Black Girl Magic',
      userSlice: 'H',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in volupta '
    },
    {
      username: 'Runner’s High',
      userSlice: 'H',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in volupta '
    },
    {
      username: 'Vegan Winners',
      userSlice: 'H',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in volupta '
    },
    {
      username: 'Healthy Aging Women',
      userSlice: 'H',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in volupta '
    },
    {
      username: 'Stressed Out',
      userSlice: 'H',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in volupta '
    },
    {
      username: 'Vegan Winners',
      userSlice: 'H',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in volupta '
    },


  ]
  return (
    <ImageBackground style={styles.container} source={require('../../../../assets/Food.png')}>
      <View style={styles.Headercontainer}>
        <SafeAreaView style={styles.SafeAreaView}>
          <Input
            placeholder={'search'}
            placeholderTextColor={'#C5C5C5'}
            SafeAreaView={styles.inputContainer}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </SafeAreaView>
      </View>
      <View style={styles.recommended}>
        <Text style={styles.recommended_text}>
          Recipes
        </Text>
      </View>
      <View style={styles.Detail_Container}>
        <ScrollView style={{ marginBottom: 50, marginTop: 2 }}>
          <View>
            <View style={styles.post_user}>
              <View style={styles.user_detail}>

                <TouchableOpacity
                  style={styles.user_name_box}>
                  <Text style={styles.userName}>
                    Kale Salad
                  </Text>
                </TouchableOpacity>
                <View style={styles.Like_Dislike_container}>
                  <Image source={require('../../../../assets/like.png')} />
                  <Image style={{ marginTop: 10, }} source={require('../../../../assets/dislike.png')} />

                </View>
              </View>
              <View style={styles.details_container}>
                <Text style={styles.detail_post}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut</Text>
              </View>
            </View>
            <View style={styles.post_user}>
              <View style={styles.user_detail}>

                <TouchableOpacity
                  //  onPress={()=>navigation.navigate('Community1')}
                  style={styles.user_name_box}>
                  <Text style={styles.userName}>
                  Chicken Pita
                  </Text>
                </TouchableOpacity>
                <View style={styles.Like_Dislike_container}>
                  <Image source={require('../../../../assets/like.png')} />
                  <Image style={{ marginTop: 10, }} source={require('../../../../assets/dislike.png')} />

                </View>
              </View>
              <View style={styles.details_container}>
                <Text style={styles.detail_post}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut</Text>
              </View>
            </View>
            <View style={styles.post_user}>
              <View style={styles.user_detail}>

                <TouchableOpacity
                  //  onPress={()=>navigation.navigate('Community1')}
                  style={styles.user_name_box}>
                  <Text style={styles.userName}>
                  Blueberry-Avacado Smoothies
                  </Text>
                </TouchableOpacity>
                <View style={styles.Like_Dislike_container}>
                  <Image source={require('../../../../assets/like.png')} />
                  <Image style={{ marginTop: 10, }} source={require('../../../../assets/dislike.png')} />

                </View>
              </View>
              <View style={styles.details_container}>
                <Text style={styles.detail_post}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut</Text>
              </View>
            </View>
            <View style={styles.post_user}>
              <View style={styles.user_detail}>

                <TouchableOpacity
                  //  onPress={()=>navigation.navigate('Community1')}
                  style={styles.user_name_box}>
                  <Text style={styles.userName}>
                  Spicy Tuna Wrap
                  </Text>
                </TouchableOpacity>
                <View style={styles.Like_Dislike_container}>
                  <Image source={require('../../../../assets/like.png')} />
                  <Image style={{ marginTop: 10, }} source={require('../../../../assets/dislike.png')} />

                </View>
              </View>
              <View style={styles.details_container}>
                <Text style={styles.detail_post}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut</Text>
              </View>
            </View>
            {/* <FlatList
        data={data}
        renderItem={({item})=>{
          return(
           
          )
        }}/> */}
             <View style={styles.post_user}>
              <View style={styles.user_detail}>

                <TouchableOpacity
                  //  onPress={()=>navigation.navigate('Community1')}
                  style={styles.user_name_box}>
                  <Text style={styles.userName}>
                  Chicken Pita
                  </Text>
                </TouchableOpacity>
                <View style={styles.Like_Dislike_container}>
                  <Image source={require('../../../../assets/like.png')} />
                  <Image style={{ marginTop: 10, }} source={require('../../../../assets/dislike.png')} />

                </View>
              </View>
              <View style={styles.details_container}>
                <Text style={styles.detail_post}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut</Text>
              </View>
            </View>
            <View style={styles.post_user}>
              <View style={styles.user_detail}>

                <TouchableOpacity
                   onPress={()=>navigation.navigate('Food2')}

                  //  onPress={()=>navigation.navigate('Community1')}
                  style={styles.user_name_box}>
                  <Text style={styles.userName}>
                  Blueberry-Avacado Smoothies
                  </Text>
                </TouchableOpacity>
                <View style={styles.Like_Dislike_container}>
                  <Image source={require('../../../../assets/like.png')} />
                  <Image style={{ marginTop: 10, }} source={require('../../../../assets/dislike.png')} />

                </View>
              </View>
              <View style={styles.details_container}>
                <Text style={styles.detail_post}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut</Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default Food1