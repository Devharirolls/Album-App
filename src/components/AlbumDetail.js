import React from "react";
import { StyleSheet, Text,View,Image,Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({albums}) => {
    const {title,artist,thumbnail_image,image,url} =albums;
    return (
      <Card>
        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image 
                style={styles.thumbnail_image} 
                source={{uri:thumbnail_image}}
                />
            </View>
            <View style={styles.headerContainStyle}>
                <Text style={styles.textStyle1}>{title}</Text>
                <Text style={styles.textStyle2}>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image 
            style={styles.imageStyle}
            source={{uri:image}}
            />
        </CardSection>

        <CardSection>
            <Button onPress={()=>Linking.openURL(url)}/>
        </CardSection>
      </Card>
      
    );
  };

const styles = StyleSheet.create({
    textStyle1:{
        color:'black',
        fontWeight:'bold',
        fontSize:18,
    },
    textStyle2:{
        color:'black',
        fontWeight:'500',
        fontSize:16,
    },  

    headerContainStyle:{
        justifyContent:'space-around',
        flexDirection:'column'
    },
    thumbnail_image:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null,
    }
    
});
export default AlbumDetail;

  