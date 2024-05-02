import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../../Component/Text_Input'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS } from '../../../them/Colors'
import { useNavigation } from '@react-navigation/native'

const Blog = () => {
  const [post, setPost] = useState('');
  const navigation=useNavigation();
  
  return (
    <ImageBackground style={styles.container} source={require('../../../../assets/Blog.png')}>
      <View style={styles.header_title_container}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Home')}
         style={styles.icon_container}>
          <Image source={require('../../../../assets/back.png')} />
        </TouchableOpacity>
        <View style={styles.text_title}>
          <Text style={styles.title}>
          Eat Well with Diabetes
          </Text>
        </View>
      </View>
      <View style={styles.Detail_Container}>
        <ScrollView style={{marginBottom:17,}}>

        
      <View style={styles.text_container}>
        <Text style={styles.discritpion_container}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar viverra mollis. Proin eget lorem risus. Curabitur malesuada enim risus, non aliquam dui aliquam in. Maecenas porta aliquet mollis. Quisque metus tellus, varius tincidunt elit nec, mollis dignissim nisi. Phasellus vel lacus accumsan, aliquam augue eget, dictum arcu. Nunc ut lorem non turpis placerat vehicula vitae eu nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac ligula cursus, sagittis sapien non, consequat metus. Duis eu metus dictum, tincidunt ligula eget, molestie dui. Nunc lobortis nisl purus, non suscipit sem ultrices quis. Quisque facilisis faucibus eleifend. Nunc gravida bibendum tellus ut rutrum. Etiam ultricies in mi quis mattis. Praesent nulla nulla, volutpat ac varius consequat, pulvinar vel leo. Etiam dictum risus at porttitor vehicula. Donec massa quam, venenatis et commodo id, tempus sit amet ex. Suspendisse scelerisque imperdiet semper. Maecenas vitae quam et turpis sodales tristique nec id mauris. Donec in nisl a risus ullamcorper tempus. Vestibulum scelerisque maximus lectus, ut volutpat odio vestibulum tempus. Praesent rutrum, tortor eget aliquet vestibulum, nunc sem luctus elit, vel congue nibh nunc placerat erat. Ut viverra est lorem, ac congue ipsum dignissim id. Donec vitae massa volutpat, efficitur urna eu, auctor leo. Aliquam ac mi turpis. Duis laoreet aliquam posuere. Etiam sagittis leo neque. Suspendisse hendrerit, odio nec commodo tempor, orci turpis tristique tortor, ut consectetur metus eros aliquam elit. Aenean nec odio et lectus hendrerit dapibus quis vitae dolor. Quisque placerat elit et ex dignissim, sit amet blandit turpis commodo. Nullam tincidunt ante id nulla commodo placerat. Donec finibus consequat tellus eu efficitur. Nullam tempor, quam ac convallis elementum, elit tortor molestie eros, eget varius elit mauris quis libero. Sed nec porta tortor. Fusce id aliquam ipsum, in rutrum odio. Aliquam in blandit magna, ut hendrerit elit. Sed porta venenatis sem, sit amet tincidunt dui elementum id. Nam commodo tempus dictum. Integer lobortis, urna nec interdum cursus, augue mauris luctus magna, non pharetra tortor sapien eu augue. Duis leo lorem, accumsan id ultrices in, vestibulum id est. Nulla erat est, ullamcorper nec nisi ut, laoreet vehicula erat. Aliquam fringilla magna et nibh placerat, eu dapibus dolor mattis. Nam metus turpis, laoreet sit amet tortor vel, sodales tincidunt diam. Praesent venenatis purus eu justo ultricies, vitae pretium mi laoreet. Aenean aliquet mi lectus. Nullam feugiat lobortis est.
        </Text>
        </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default Blog