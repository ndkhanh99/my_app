import React from 'react'; 
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import Textapp from './components/Textapp';
import Nailslist from './components/Nailslist';
import Flatbutton from './components/button'
import { Button, Alert } from 'react-native';
import Navigator from './routes/drawer'
import Create from './components/create'



export default function App() {

  return (

    <Navigator/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  title: {
    fontSize: 24
  }
  
});
