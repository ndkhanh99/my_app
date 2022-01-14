import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { state } from 'react-native-gesture-handler';

class Classtext extends Component{
    
    state = {
        name:"Duc Tai ne"
    }
    render() {

        return (
            <View style = {styles.text}>
                <Text style = {{ color : 'black'}}>{this.state.name}</Text>
                <Text style = {{color: 'blue'}}>Open up App.js to start working on your app!</Text>
                <Button title = 'Choose this person' onPress = {() => this.setState({name:"This have been chosen for you"}) } />
            </View>
        )
    }
}

// function Textapp ({navigation}) {
//     const pressHandler = () => {
//         navigation.goBack();
//     }
//     state = {
//         name: "Duy Khanh ne"
//     }
//     return (
//         <View style = {styles.text}>
//             <Text style = {{color: 'blue'}}>Open up App.js to start working on your app!</Text>
//             <Text>{this.state.name}</Text>
//             <Button title = 'go back to Home' onPress = {pressHandler} />
//         </View>
//     )
// }

const styles = StyleSheet.create({
    text: {
      padding: 20, 
      backgroundColor: 'white',
},
});

export default Classtext;
