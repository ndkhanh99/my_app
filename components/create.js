import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { TextInput, Button} from 'react-native-paper';

function Create (props) {
    const [title, setTilte] = useState("")
    const [body, setBody] = useState("")

    const insertData = () => {
        fetch('http://127.0.0.1:5000/add', {

            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ title:title, body:body})
        })
        .then(resp => resp.json())
        .then(data => {
            Alert.alert('Pressed!')
        })
        .catch(error => console.log(error))
    }


    return (
        <View style = {{ textAlign: 'center'}}>
            <TextInput style={styles.Input}
              label = "title"
              value = {title}
              mode = 'outlined'
              onChangeText = {text => setTilte(text)} 
            />

            <TextInput style={{padding: 50 , marginRight: 50 , marginLeft: 50}}
              label = "body"
              value = {body}
              mode = 'outlined'
              multiline
              numberOfLines = {25}
              onChangeText = {text => setBody(text)} 
            />
            <Button style = {{ margin: 50, height: 50, width: 200 }}
            title = "Submit"
            icon = 'pencil'
            mode = 'contained'
            onPress = {() => insertData() }
            >Insert Data</Button>

        </View>
    )

}

const styles = StyleSheet.create({
    Input: {
        padding: 30,
        margin: 50,
    }
});

export default Create;