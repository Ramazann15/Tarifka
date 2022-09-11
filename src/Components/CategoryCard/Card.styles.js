import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#D97676",
        margin:10,
        marginLeft:20,
        borderRadius:10,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        flexDirection:"row",
    },
    img:{
        width:100,
        height:100,
        resizeMode:"contain",
        marginLeft:25
    },
    text:{
        color:"#321432",
        fontSize:22,

    },
    innercontainer:{
        marginLeft:20,
        justifyContent:"center"
    }
})