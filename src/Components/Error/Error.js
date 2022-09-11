import React from 'react'
import Lottie from 'lottie-react-native';
function Error() {
  return (
    <Lottie  style={{backgroundColor:"#FFE5E5"}} source={require('../../../assets/error.json')} autoPlay loop />
  )
}


export default Error