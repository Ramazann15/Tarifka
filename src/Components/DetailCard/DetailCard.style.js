import { StyleSheet, Dimensions } from "react-native";

const ScreenHeight = Dimensions.get("screen").height

export default StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:"#321432",
        borderRadius:10,
    },
    img:{
        height:ScreenHeight / 3,
        borderRadius:10,
        margin:10,
    },
    body:{
        margin:10
    },
    name:{
        fontSize:30,
        fontWeight:"bold",
        color:"#FFE5E5"
    },
    header:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    country:{
        fontSize:20,
        fontWeight:"bold",
        color:"#D97676"
    },
    button:{
        backgroundColor:"#D97676",
        borderRadius:5,
        padding:10,
        
    },
    context:{
        marginTop:10,
        letterSpacing:0.2,
        lineHeight:25,
        marginBottom:10,
        color:"#FFE5E5"
    },
    contextContainer:{
        marginTop:10,
        borderTopColor:"black",
        borderTopWidth:1,
    },
    buttontext:{
        textAlign:"center",
        fontWeight:"bold",
        color:"#FFE5E5",
    }
})