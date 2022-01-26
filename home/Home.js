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



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Category
          category="Shot"
          navigate={navigation.navigate}
        ></Category>
        <Category
          category="Cocktail"
          navigate={navigation.navigate}
        ></Category>
        <Category
          category="Punch / Party Drink"
          navigate={navigation.navigate}
        ></Category>
      </ScrollView>
    </View>
  );
}

function DrinkScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={HomeScreen} />
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
