import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Alert } from "react-native";
import { FAB } from 'react-native-paper';

function Home ( props ) {

    const [reviews, setReviews] = useState([
      { id: 1, title : 'Nguyen Duy Khanh', body: 'Ho chi minh university of technology' },
      { id: 2, title : 'Pham Duc Tai', body: 'California university of technology' },
    ]);

    const [data, setData] = useState ([])

    useEffect (() => {
      fetch('http://127.0.0.1:5000/get_data', {

        method: 'GET'
      })

      .then(resp => resp.json())
      .then(article => {
          setData(article)
      })

    }, [])

    const clikedItem = (data) => {
        props.navigation.navigate('DetailStack' , {data:data})
    }

    return(
      
      <View  style = {styles.Wrapped}>

        <FlatList
          data = {data}
          renderItem ={({ item }) => (
            <TouchableOpacity onPress = {() => clikedItem(item)}>
              <Text style={{ color : '#111' ,textAlign: 'center', marginTop: 20 }}>{ item.id }</Text>
              <Text style={{ color : '#111' ,textAlign: 'center', marginTop: 20 }}>{ item.title }</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={{ textAlign: 'center' , marginTop: 20 , marginBottom: 20 }}> Home Screen </Text>

        <Button style={{marginTop: 30}} title = 'go to text' 

          onPress = {() => {props.navigation.navigate('NailsStack');
        }} />

        <Button style={{marginTop: 30}} title = 'go to text' 

          onPress = {() => {props.navigation.navigate('TextappStack');
        }} />

        <FAB
          style = {styles.fab}
          small = {false}
          icon = "plus"
          theme = {{colors:{accent:"yellow"}}}
          onPress = {() => {props.navigation.navigate('CreateStack')}
        }

        />

        
      </View>

    );

}


const styles = StyleSheet.create({

    Wrapped: {
      flex: 0.5,
      marginTop: 50,
      textAlign: 'center'
    },
    fab: {
      position:'absolute',
      margin: 16,
      right: 0,
      bottom: 5,
    }
  
});

export default Home;