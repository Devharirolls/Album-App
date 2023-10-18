import React, { Component } from "react";
import { StyleSheet, ScrollView} from "react-native";
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";


class AlbumList extends Component{
    state={music_albums:[]}
    componentDidMount() {
        axios.get('http://2a1d-59-97-56-115.ngrok.io/music_albums')
          .then(response => this.setState({ music_albums: response.data }))
          .catch(error => console.error(error));
      }
      

    renderAlbums(){
        return this.state.music_albums.map(music_albums=>
        <AlbumDetail key={music_albums.title} albums={music_albums}/>);
    }


    render(){
        console.log(this.state);
        return <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    }
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize:20
    }
});

export default AlbumList;


