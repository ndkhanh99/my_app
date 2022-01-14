import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, ColorPropType } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Nailslist() {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text onPress = {() => console.log("Button tapped!")} style={styles.title}>{title}</Text>
    </View>
  );

   return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={ (item, index) => item + index }
        renderItem={ ({ item }) => <Item title={item} /> }
        renderSectionHeader={({ section: { title } }) => (
          <Text onPress = {() => console.log("tapped") }
          style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 10
    },
    item: {
      backgroundColor: "#111",
      padding: 15,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff",
      color: "#111",
    },
    title: {
      fontSize: 24,
      color: "white"
    }
  });

export default Nailslist