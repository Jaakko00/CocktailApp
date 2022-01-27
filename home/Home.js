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
import NonAlcoholic from "./NonAlcoholic";
import TodaysDrink from "./TodaysDrink";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TabRouter } from "react-navigation";
import DrinkScreen from "../drink/DrinkScreen";

const Stack = createStackNavigator();

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TodaysDrink navigate={props.navigation.navigate}></TodaysDrink>
        <NonAlcoholic
          category="Non_Alcoholic"
          navigate={props.navigation.navigate}
        ></NonAlcoholic>
        <Category
          category="Shot"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Cocktail"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Punch / Party Drink"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Ordinary Drink"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Beer"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Cocoa"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Milk / Float / Shake"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Soft Drink / Soda"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Coffee / Tea"
          navigate={props.navigation.navigate}
        ></Category>
        <Category
          category="Other/Unknown"
          navigate={props.navigation.navigate}
        ></Category>
      </ScrollView>
    </View>
  );
}

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "#fff",

          headerShown: true,
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="DrinkScreen"
        component={DrinkScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#171717" },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    padding: 10,
    fontSize: 20,
  },
});
