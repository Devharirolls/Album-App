// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//import a library to create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumsList from "./src/components/AlbumList";


//create a component 
const App = ()=>{
    return(
        <View style={{flex:1}}>
            <Header/>
            <AlbumsList/>
        </View>
     );
}

//render in to device
AppRegistry.registerComponent('First_Project',()=>App);
