import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../Screens/Home';
import { COLORS } from '../../them/Colors';
import Exercise from '../../Screens/Exercies';
import Profile from '../../Screens/Profile';
import Food2 from '../../Screens/FOOD/Food2';
import Food1 from '../../Screens/FOOD/Food1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community1 from '../../Screens/Community/Community1';
import Community2 from '../../Screens/Community/Community2';
import Community3 from '../../Screens/Community/Community3';
import Community4 from '../../Screens/Community/Community4';
import Community5 from '../../Screens/Community/Community5';
import Community6 from '../../Screens/Community/Community6';
import Community7 from '../../Screens/Community/Community7';
const Buttom=createBottomTabNavigator();
const FoodStack = createNativeStackNavigator();
const CommunityStack=createNativeStackNavigator();
const CommunityNavigator = () => {
  return (
    <CommunityStack.Navigator headerMode="none" screenOptions={{headerShown:false}}>
      <CommunityStack.Screen name='Community2' component={Community2}/>
      <CommunityStack.Screen name='Community1' component={Community1}/>
      <CommunityStack.Screen name='Community3' component={Community3}/>
      <CommunityStack.Screen name='Community4' component={Community4}/>
      <CommunityStack.Screen name='Community5' component={Community5}/>
      <CommunityStack.Screen name='Community6' component={Community6}/>
      <CommunityStack.Screen name='Community7' component={Community7}/>
    </CommunityStack.Navigator>
  );
};
const FoodNavigator = () => {
  return (
    <FoodStack.Navigator headerMode="none" screenOptions={{headerShown:false}}>
      <FoodStack.Screen name="Food1" component={Food1} />
      <FoodStack.Screen name="Food2" component={Food2} />
    </FoodStack.Navigator>
  );
};
const Buttom_Navigation = () => {
  return (
    <Buttom.Navigator screenOptions={{headerShown:false,
      
    tabBarStyle:{backgroundColor:COLORS.mainColor},tabBarShowLabel:false}}>
      <Buttom.Screen name='Desktop' component={Home}
       options={{  
        
        
            tabBarIcon: ({ size, focused, color }) => {
              
              return (
                <View>
                  { focused?
                   ( 
                    <Image source={require('../../../assets/activeHome.png')}/>
                        )
                        :
<Image source={require('../../../assets/inactiveHome.png')}/>     
                  }
                </View>
              );
            },
          }}
          />
      <Buttom.Screen name='FOOD' component={FoodNavigator}
       options={{  
        tabBarIcon: ({ size, focused, color }) => {
          
          return (
            <View>
              { focused?
               ( 
                <Image source={require('../../../assets/activFood.png')}/>
                    )
                    :
<Image source={require('../../../assets/inactiveFood.png')}/>     
              }
            </View>
          );
        },
      }}
      />
      <Buttom.Screen name='Exercise' component={Exercise}
       options={{  
        tabBarIcon: ({ size, focused, color }) => {
          
          return (
            <View>
              { focused?
               ( 
                <Image source={require('../../../assets/activeExercise.png')}/>
                    )
                    :
<Image source={require('../../../assets/inactiveExercise.png')}/>     
              }
            </View>
          );
        },
      }}/>
      <Buttom.Screen name='Community' component={CommunityNavigator}
       options={{  
        tabBarIcon: ({ size, focused, color }) => {
          
          return (
            <View>
              { focused?
               ( 
                <Image source={require('../../../assets/activeCommunity.png')}/>
                    )
                    :
<Image source={require('../../../assets/inactiveCommunity.png')}/>     
              }
            </View>
          );
        },
      }}/>
      <Buttom.Screen name='Profile' component={Profile}
       options={{  
        tabBarIcon: ({ size, focused, color }) => {
          
          return (
            <View>
              { focused?
               ( 
                <Image source={require('../../../assets/activeProfile.png')}/>
                    )
                    :
<Image source={require('../../../assets/inactiveProfile.png')}/>     
              }
            </View>
          );
        },
      }}/>
    </Buttom.Navigator>
  )
}

export default Buttom_Navigation