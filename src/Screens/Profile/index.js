import { View, Text, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style'
const Profile = () => {
  const data=[
{
  userQuestion:'User Name:',
  useAns:'8803User'
},
{
  userQuestion:'First Name:',
  useAns:'8803'
},
{
  userQuestion:'Last Name:',
  useAns:'User'
},
{
  userQuestion:'Email:',
  useAns:'8803User@gatech.edu'
},{
  userQuestion:'Age:',
  useAns:'45'
},{
  userQuestion:'BMI:',
  useAns:'30'
},{
  userQuestion:'Systolic blood pressure:',
  useAns:'150'
},{
  userQuestion:'Diastolic blood pressure:',
  useAns:'80'
},{
  userQuestion:'Cholesterol level:',
  useAns:'145'
},{
  userQuestion:'Smoke:',
  useAns:'Yes'
},
{
  userQuestion:'High blood pressure:',
  useAns:'Yes'
},{
  userQuestion:'Hours per week physical activity: ',
  useAns:'15',
},
{
  userQuestion:'Fruit Consumption:',
  useAns:'Once a Day or More'
},{
  userQuestion:'Vegetable Consumption:',
  useAns:'Once a Day or More'
},{
  userQuestion:'Drives after drinking:',
  useAns:'No'
},{
  userQuestion:'Health plan coverage:',
  useAns:'Yes'
},{
  userQuestion:'Difficulty paying medical bills:',
  useAns:'Yes'
},
{
  userQuestion:'General health:',
  useAns:'Fair'
},{
  userQuestion:'Poor mental health days:',
  useAns:'5'
},
{
  userQuestion:'Poor physical health days:',
  useAns:'10'
},{
  userQuestion:'Difficulty walking:',
  useAns:'No'
},
{
  userQuestion:'Fruit Consumption:',
  useAns:'Once a Day or More'
},{
  userQuestion:'Vegetable Consumption:',
  useAns:'Once a Day or More'
},{
  userQuestion:'Drives after drinking:',
  useAns:'No'
},
{
  userQuestion:'General health:',
  useAns:'Fair'
},


  ]
  return (
    <ImageBackground style={styles.container} source={require('../../../assets/Profile.png')}>
      <View style={styles.Detail_container}>
        <FlatList data={data} 
        renderItem={({item})=>{
          return(
<View style={styles.User_Details_container}>
          <View style={styles.user_ans_container}>
            <Text style={styles.user_Type}>
              {item.userQuestion}
            </Text>
            <Text style={styles.user_text}>
              {item.useAns}
            </Text>
          </View>
        </View>
          )
        }}/>
        
      </View>
    </ImageBackground>
  )
}

export default Profile