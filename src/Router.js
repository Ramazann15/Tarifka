import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from "./Pages/Categories/index"
import Details from "./Pages/Details/index"
import Meals from "./Pages/Meals/index"
import Internet  from "./Components/NoConnection/NoConnection"

const Stack = createNativeStackNavigator();

function Router() {
  return (
   <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen name='CategoriesScreen' component={Categories} options={{title:"Categories" , headerStyle:{backgroundColor:"#FFE5E5"} , headerTintColor:{backgroundColor:"#321432"}}}/>
            <Stack.Screen name='DetailsScreen' component={Details} options={{title:"Detail" , headerStyle:{backgroundColor:"#FFE5E5"} , headerTitleStyle:{backgroundColor:"#321432"}, headerTintColor:"#321432"}}/>
            <Stack.Screen name='MealsScreen' component={Meals} options={{title:"Meals" , headerStyle:{backgroundColor:"#FFE5E5"} , headerTitleStyle:{backgroundColor:"#321432"} , headerTintColor:"#321432"}}/>
            <Stack.Screen name='NoInternet' component={Internet} screenOptions={{ headerShown: false }} options={{headerShown:false}}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Router