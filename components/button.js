import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Flatbutton ({ text, onPress }) {
    return(
        <TouchableOpacity onPress ={onPress} >
            
            <View style={styles.wrapped}>
                <View style={styles.button}>
                    <Text style = {styles.textbutton}> {text} </Text>
                </View>
                <View style={styles.button}>
                    <Text style = {styles.textbutton}> {text} </Text>
                </View>
                <View style={styles.button}>
                    <Text style = {styles.textbutton}> {text} </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapped: {
        margin: 20,
        width: 200,
        height: 500,
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: "#111",
        width: 200,
        height: 100,
        marginRight: 100,
        
    },

    textbutton: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        
    },

}) 