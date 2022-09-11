import React from 'react'
import { View , FlatList , Text} from 'react-native'

import config from "../../../config"
import useFetch  from "../../Hooks/useFetch/index"

import Loading from "../../Components/Loading/loading"
import styles from "./Meal.styles"
import MealCard  from '../../Components/MealCard/MealCards'
import Error from '../../Components/Error/Error'
function Meals({route, navigation}) {
  const category = route.params.category
  const {data,loading,error,isInternet} = useFetch(config.API_URL+ "filter.php?c=" +category)


  const onPress = (idMeal)=>{
    navigation.navigate("DetailsScreen",{idMeal})
  }

  if(isInternet == false){
    navigation.navigate("NoInternet")
  }

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }

 

  const MealCards = ({item}) =><MealCard onPressHandler={()=>onPress(item.idMeal)} Meals={item}/>

  return (
    <View style={styles.container}>
        <FlatList  data={data.meals} renderItem={MealCards}/>
    </View>
  )
}

export default Meals