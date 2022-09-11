import { StyleSheet  , Dimensions} from "react-native";

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width
export default StyleSheet.create({
    container:{
        flex:1,
        margin:15
    },
    innercontainer:{
        position:"absolute",
        bottom: 0.5,
        backgroundColor: 'rgba(50, 20, 50, 0.6)',
        width:screenWidth -30,
        alignItems:"flex-end",
        height:65,
        justifyContent:"center"
    },
    img:{
        height:screenHeight/3,
        borderRadius:10,
    },
    text:{
        color:"#FFE5E5",
        fontSize:25,
        fontWeight:"bold",
        marginRight:8
    }
})