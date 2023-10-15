//import the library  for making the component
import React from "react";
import { Text, View,StyleSheet } from "react-native";



const Header=()=>{
    const {textstyle,viewStyle}=styles;
    return(
        <View style={viewStyle}>
            <Text style={textstyle}>Albums of BTS!!!</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        padding:15,
        shadowColor:'#000',
        shadowOffset:{width:0,height:20},
        shadowOpacity:0.5,
        shadowRadius:2,
    },
    textstyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
})

export default Header;