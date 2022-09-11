import React from 'react'
import { View , Text ,FlatList } from 'react-native'

import config from '../../../config'
import useFetch from '../../Hooks/useFetch'

import styles from "./Details.style"
import DetailCard from '../../Components/DetailCard/index'
import Loading from '../../Components/Loading/loading'
import Error from '../../Components/Error/Error'

function Details({route,navigation}) {

  const idMeal = route.params.idMeal
  const {data,loading,error , isInternet} = useFetch(config.API_URL+ "lookup.php?i=" +idMeal)
  
  if(!isInternet == false){
    navigation.navigate("NoInternet")
  }
  if(error){
    return <Error/>
  }
  if(loading){
    return  <Loading/>
  }

  const DetailCardRender = ({item})=><DetailCard meals={item}/>
  return (
    <View style={styles.container}>
        <FlatList data={data.meals} renderItem={DetailCardRender}/>
    </View>
  )
}

export default Details