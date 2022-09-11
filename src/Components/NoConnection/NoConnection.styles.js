import { StyleSheet , Dimensions } from "react-native"

const screenHeigth = Dimensions.get("screen").height
const screenWith = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
    },
    innercontainer:{
        marginBottom:screenHeigth/5,
        alignItems:"center"
    },
    img:{
        backgroundColor:"#FFE5E5",
    },
    button:{
        backgroundColor:"#D97676",
        borderRadius:5,
        padding:10,
        width:screenWith/2,
    },
    text:{
        textAlign:"center",
        color:"#FFE5E5",
        fontWeight:"bold",
    },
    info:{
        marginBottom:10,
        textAlign:"center",
        color:"#321432"
    }
})

export default styles