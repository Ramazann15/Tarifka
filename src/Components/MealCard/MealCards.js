import React from 'react'
import { View  , Text ,Image , TouchableWithoutFeedback} from 'react-native'

import styles from "./MealCard.style"

export default function MealCard({Meals , onPressHandler}) {

  console.log(Meals.strMealThumb)
  
  return (
    <TouchableWithoutFeedback  onPress={onPressHandler}>
      <View style={styles.container}>
      <Image style={styles.img} source={{uri:Meals.strMealThumb}}/>

      <View style={styles.innercontainer}>
        <Text style={styles.text}>{Meals.strMeal}</Text>
      </View>

      </View>
      

    </TouchableWithoutFeedback>
  )
}
