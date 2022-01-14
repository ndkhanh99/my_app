import React from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { TextInput, Button} from 'react-native-paper';

function Details(props) {
    
    const data = props.route.params.data;

    return (
        <ScrollView>
            <View style={styles.details}>
                <Text style = {styles.vanban}>{data.id}</Text>
                <Text style = {styles.vanban}>{data.title}</Text>
                <Text style = {styles.vanban}>{data.body}</Text>
                
            </View>

            <View style = {styles.buttonstyle}>

                <Button style = {{ margin: 50, height: 50, width: 200 }}
                    icon = 'update'
                    mode = 'contained'
                    onPress = {() => Alert.alert('Pressed') }
                >Update</Button>

                <Button style = {{ margin: 50, height: 50, width: 200 }}
                    icon = 'delete'
                    mode = 'contained'
                    onPress = {() => Alert.alert('Pressed') }
                >Delete</Button>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    details: {
        alignItems: 'center', 
        marginTop: 50,
    },

    vanban: {
        letterSpacing: 2,
        fontSize: 20,
        margin: 10,
    },

    buttonstyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15,
        padding: 15,

    }
})

export default Details
