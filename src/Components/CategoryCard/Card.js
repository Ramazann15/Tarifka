import React from 'react'
import { View ,Text , Image , TouchableWithoutFeedback} from 'react-native'

import styles from "./Card.styles"

function Card({categories, onPressHandler}) {

    
  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
    <View style={styles.container}>
        <Image style={styles.img} source={{uri:categories.strCategoryThumb}}/>
        <View style={styles.innercontainer}>
            <Text style={styles.text} >{categories.strCategory}</Text>
        </View>
    </View>

    </TouchableWithoutFeedback>
  )
}

export default Card