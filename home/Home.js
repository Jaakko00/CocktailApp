import react, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import axios from "axios";
import DrinkCard from "../search/DrinkCard";
import SearchResults from "../search/SearchResults";
import Category from "./Category";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Category category="Shot"></Category>
        <Category category="Cocktail"></Category>
        <Category category="Punch / Party Drink"></Category>
      </ScrollView>
    </View>
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
