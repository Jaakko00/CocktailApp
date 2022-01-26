import react, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import Category from "./Category";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TabRouter } from "react-navigation";

const Stack = createStackNavigator();

function DrinkScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return(
    <View style={styles.container}>
    <ScrollView>
      <Button
        title="Go to DrinkScreen"
        onPress={() => navigation.navigate("DrinkScreen")}
      />
      <Category category="Shot"></Category>
      <Category category="Cocktail"></Category>
      <Category category="Punch / Party Drink"></Category>
    </ScrollView>
  </View>
  );
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E40066" },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    padding: 10,
    fontSize: 20,
  },
});
