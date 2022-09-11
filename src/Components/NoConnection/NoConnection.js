import Lottie from 'lottie-react-native';
import { TouchableOpacity , View, Text } from 'react-native';

import styles from './NoConnection.styles';

function NoConnection({navigation}) {

  const onpress = ()=>{
    navigation.navigate("CategoriesScreen")
  }

  return (
    <View style={styles.container} >
      <Lottie   style={styles.img}  source={require('../../../assets/noınternet.json')} autoPlay loop />
      <View style={styles.innercontainer}>
        <Text  style={styles.info}>Sorry we not found internet connection . Please check your internet connection. </Text>
        <TouchableOpacity onPress={onpress} style={styles.button}><Text  style={styles.text}>Back</Text></TouchableOpacity>
      </View>
      
    </View>
  )
}




export default NoConnection