import React from 'react'
import { View , Text ,FlatList } from 'react-native'

import config from "../../../config"
import useFetch  from "../../Hooks/useFetch/index"

import styles from "./Categories.style"
import CategoryCard from "../../Components/CategoryCard/index"
import Loading from "../../Components/Loading/loading"
import Error from '../../Components/Error/Error'
function Categories({navigation}) {

    const {data,loading,error,isInternet} = useFetch(config.API_URL+ "categories.php")
    console.log(config.API_URL)
    const onPressHandler = (category)=>{
        navigation.navigate("MealsScreen",{category})
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
    const Card = ({item}) => <CategoryCard categories ={item} onPressHandler={()=>onPressHandler(item.strCategory)}/>

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={Card}/>
    </View>
  )
}

export default Categories