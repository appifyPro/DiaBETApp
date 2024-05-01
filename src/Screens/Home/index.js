import { View, Text, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style'

const Home = () => {
  const data=[
    {
      title:'Eat Well with Diabetes',
      discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at efficitur risus, at egestas dolor. Etiam in nisl fringilla, pretium tortor quis, blandit erat. Sed sagittis odio vel ultricies viverra. Morbi efficitur est et semper dictum. Cras finibus efficitur eros, et sollicitudin velit faucibus eget. Praesent maximus viverra condimentum. Nullam dictum, neque vel luctus elementum, lorem nisl congue lorem, sit amet tincidunt lectus nibh et quam. Praesent malesuada rutrum quam. Nullam et laoreet felis. Vestibulum in rhoncus ex. Ut consequat tincidunt mi a semper. Duis mattis dui id eros sagittis, eu bibendum mauris tincidunt. Donec sit amet felis commodo, ultrices nunc eget, eleifend arcu. Donec egestas nisi vitae venenatis'
                
    },
    {
      title:'Your Recipe for a Healthy Relationship with Food',
      discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at efficitur risus, at egestas dolor. Etiam in nisl fringilla, pretium tortor quis, blandit erat. Sed sagittis odio vel ultricies viverra. Morbi efficitur est et semper dictum. Cras finibus efficitur eros, et sollicitudin velit faucibus eget. Praesent maximus viverra condimentum. Nullam dictum, neque vel luctus elementum, lorem nisl congue lorem, sit amet tincidunt lectus nibh et quam. Praesent malesuada rutrum quam. Nullam et laoreet felis. Vestibulum in rhoncus ex. Ut consequat tincidunt mi a semper. Duis mattis dui id eros sagittis, eu bibendum mauris tincidunt. Donec sit amet felis commodo, ultrices nunc eget, eleifend arcu. Donec egestas nisi vitae venenatis'
                
    },
    {
      title:'Relationship with Food',
      discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at efficitur risus, at egestas dolor. Etiam in nisl fringilla, pretium tortor quis, blandit erat. Sed sagittis odio vel ultricies viverra. Morbi efficitur est et semper dictum. Cras finibus efficitur eros, et sollicitudin velit faucibus eget. Praesent maximus viverra condimentum. Nullam dictum, neque vel luctus elementum, lorem nisl congue lorem, sit amet tincidunt lectus nibh et quam. Praesent malesuada rutrum quam. Nullam et laoreet felis. Vestibulum in rhoncus ex. Ut consequat tincidunt mi a semper. Duis mattis dui id eros sagittis, eu bibendum mauris tincidunt. Donec sit amet felis commodo, ultrices nunc eget, eleifend arcu. Donec egestas nisi vitae venenatis'
                
    }
  ]
  return (
    <ImageBackground source={require('../../../assets/Home.png')} style={styles.container}>
      <View style={styles.Text_Field_Container}>
        <View style={styles.inputBox_container}>
          <FlatList data={data}
          renderItem={({item,index})=>{
            return(
              <View style={styles.Text_Contaner}>
            <View style={styles.title_container}>
              <Text style={styles.title}>
              {item.title}
              </Text>
            </View>
            <View style={styles.discription_container}>
              <Text style={styles.discription}>
                {
                  item.discription
                }
              </Text>
            </View>
          </View>
            )
          }}/>
         
        </View>
      </View>
    </ImageBackground>
  )
}

export default Home