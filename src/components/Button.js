import React from "react";
import { StyleSheet, Text,TouchableOpacity } from "react-native";


const Button = ({onPress})=>{
    return <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>Watch Song !!!</Text>    
    </TouchableOpacity> 
    
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:16,
        fontWeight:'600',
        color:'#007aff',
        alignSelf:'center',
        paddingBottom:10,
        paddingTop:10,
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
    }
});

export default Button;