import { Image, View , Text, TouchableOpacity , Linking} from 'react-native'

import styles from "./DetailCard.style"


//Fontawsome gereksizlerini sil
function DetailCard({meals}) {
    console.log(meals)

    const openYoutube = async ()=>{
        await Linking.openURL(meals.strYoutube)
    }

  return (
    <View style={styles.container}>
        <Image style={styles.img} source={{uri:meals.strMealThumb}}/>
        <View style={styles.body}>
                <Text style={styles.name}>{meals.strMeal}</Text>
                <View style={styles.header}>
                    <Text style={styles.country}>{meals.strArea}</Text>
                    <TouchableOpacity  onPress={openYoutube} style={styles.button}><Text style={styles.buttontext}>Watch Youtube</Text></TouchableOpacity>
                </View>
                <View style={styles.contextContainer}>
                    <Text style={styles.context}>{meals.strInstructions}</Text>
                </View>
                <TouchableOpacity onPress={openYoutube} style={styles.button}><Text style={styles.buttontext}>Watch Youtube</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default DetailCard