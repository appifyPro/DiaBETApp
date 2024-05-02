import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../../Component/Text_Input'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS } from '../../../them/Colors'
import { useNavigation } from '@react-navigation/native'

const Food2 = () => {
  const [post, setPost] = useState('');
  const navigation = useNavigation();

  const INTGREDIENTS= [
    {
      firstPoint: '1/2 cup Ingredient 1',
      secondPoit: '1/4 cup Ingredient 2',
      thrdPoint: '1 tsp Ingredient 3',
      forthPoit: '1/2 tsp Ingredient A',
      fifthPoit: '2 tbsp Ingredient 4',
      sixPoit: '1 package Ingredient 5',



    },
    
  ]
  const instructions= [
    {
      firstPoint: '1/2 cup Ingredient 4',
      secondPoit: '1/4 cup Ingredient 2',
      thrdPoint: '1 tsp Ingredient 7',
      forthPoit: '1/2 tsp Ingredient D',
      fifthPoit: '2 tbsp Ingredient 9',
      sixPoit: '1 package Ingredient 0',



    },
    
  ]
  const Allergens= [
    {
      firstPoint: '1/2 cup Ingredient 1',
      secondPoit: '1/4 cup Ingredient 8',
      thrdPoint: '1 tsp Ingredient 3',
      forthPoit: '1/2 tsp Ingredient V',
      fifthPoit: '2 tbsp Ingredient 4',
      sixPoit: '1 package Ingredient 7',



    },
    
  ]
  const Nutrition= [
    {
      firstPoint: '1/2 cup Ingredient 1',
      secondPoit: '1 package Ingredient 5',
      thrdPoint: '1 tsp Ingredient 3',
      forthPoit: '1/2 tsp Ingredient A',
      fifthPoit: '1/2 cup Ingredient 1',
      sixPoit: '1 package Ingredient 5',



    },
    
  ]
  const [slectBrand, setSelectBrand] = useState(null);
  const renderBrand = () => {
    switch (slectBrand) {
      case 'Ingredients':
        return INTGREDIENTS;
      case 'instructions':
        return instructions;
      case 'Allergens':
        return Allergens;
      case 'Nutrition':
        return Nutrition;
      default:
        // case 'Ingredients':
        return [];
    }
  }
  const handleBrands = (brands) => {
    setSelectBrand(brands)
  }
  return (
    <ImageBackground style={styles.container} source={require('../../../../assets/Food.png')}>
      <View style={styles.header_title_container}>
        <TouchableOpacity onPress={() => navigation.navigate('Food1')}
          style={styles.icon_container}>
          <Image source={require('../../../../assets/back.png')} />
        </TouchableOpacity>
        <View style={styles.text_title}>
          <Text style={styles.title}>
            Blueberry-Avacado Smoothies
          </Text>
        </View>
      </View>
      <View style={styles.Detail_Container}>
        <View style={styles.food_and_discription_conntainer}>
          <View style={styles.image_container}>
            <Image source={require('../../../../assets/blueBarry.png')} />
          </View>
          <View style={styles.discription_food_container}>
            <Text style={styles.discription_food}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut
            </Text>
          </View>
        </View>
        <View style={styles.Category_container}>
          <TouchableOpacity 
          onPress={() => handleBrands('Ingredients')}
           style={styles.category_box}>
            <View style={[styles.bar_container, slectBrand === 'Ingredients' ? { backgroundColor: 'black' }:null]}>
            </View>
            <Text style={styles.category_type}>
              Ingredients
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBrands('instructions')} style={styles.category_box}>
            <View style={[styles.bar_container, slectBrand === 'instructions' ? { backgroundColor: 'black' } : null]}>
            </View>
            <Text style={styles.category_type}>
              instructions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBrands('Allergens')} style={styles.category_box}>
            <View style={[styles.bar_container, slectBrand === 'Allergens' ? { backgroundColor: 'black' } : null]}>
           </View>
            <Text style={styles.category_type}>
              Allergens
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBrands('Nutrition')} style={styles.category_box}>
            <View style={[styles.bar_container, slectBrand === 'Nutrition' ? { backgroundColor: 'black' } : null]}>
            </View>
            <Text style={styles.category_type}>
              Nutrition
            </Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView style={{marginBottom:15,}}> */}


        <FlatList
          data={renderBrand()}
          renderItem={({ item }) => {
            return (
              <View style={styles.Recipy_container}>
                <View style={{height:200,width:'98%', marginTop:'10%',}}>
                <View style={styles.recipy_point}>
                  <View style={styles.dot}>
                  </View>
                  <Text style={styles.text}>
                    {item.firstPoint}
                    {/* THIE IS THE RECIPY */}
                  </Text>
                </View>
                <View style={styles.recipy_point}>
                  <View style={styles.dot}>
                  </View>
                  <Text style={styles.text}>
                    {item.secondPoit}
                    {/* THIE IS THE RECIPY */}
                  </Text>
                </View>
                <View style={styles.recipy_point}>
                  <View style={styles.dot}>
                  </View>
                  <Text style={styles.text}>
                    {item.thrdPoint}
                    {/* THIE IS THE RECIPY */}
                  </Text>
                </View>
                <View style={styles.recipy_point}>
                  <View style={styles.dot}>
                  </View>
                  <Text style={styles.text}>
                    {item.forthPoit}
                    {/* THIE IS THE RECIPY */}
                  </Text>
                </View>
                <View style={styles.recipy_point}>
                  <View style={styles.dot}>
                  </View>
                  <Text style={styles.text}>
                    {item.fifthPoit}
                    {/* THIE IS THE RECIPY */}
                  </Text>
                </View>
                <View style={styles.recipy_point}>
                  <View style={styles.dot}>
                  </View>
                  <Text style={styles.text}>
                    {item.sixPoit}
                    {/* THIE IS THE RECIPY */}
                  </Text>
                </View>
                  </View>
               
              </View>
            )
          }} />
        {/* </ScrollView> */}
      </View>
    </ImageBackground>
  )
}

export default Food2