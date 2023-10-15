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

// import React, { Component } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import axios from 'axios';

// class AlbumList extends Component {
//   state = { music_albums: [] }

//   componentDidMount() {
//     axios.get('http://9197-59-97-56-158.ngrok.io/music_albums')
//       .then(response => this.setState({ music_albums: response.data }))
//       .catch(error => console.error(error));
//   }

//   renderItem = ({ item }) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textStyle}>{item.name}</Text>
//       </View>
//     );
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <FlatList
//         data={this.state.music_albums}
//         renderItem={this.renderItem}
//         keyExtractor={(_item, index) => index.toString()}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   item: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 10,
//     paddingHorizontal: 20
//   },
//   textStyle: {
//     fontSize: 20
//   }
// });

// export default AlbumList;
