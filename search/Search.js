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
import DrinkCard from "./DrinkCard";
import SearchResults from "./SearchResults";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TabRouter } from "react-navigation";
import DrinkScreen from "../DrinkScreen";

const Stack = createStackNavigator();

function SearchScreen(props) {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([{}]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    handleFetch();
  });

  let handleFetch = () => {
    if (!searched) {
      searchCocktail("");
      setSearched(true);
    }
  };

  let searchCocktail = (e) => {
    console.log(e);
    axios
      .request(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`)
      .then(function (response) {
        if (response.data !== null) {
          setSearchResult(response.data.drinks);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let handleSearch = (e) => {
    setSearch(e);
    searchCocktail(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Search cocktails"
          onChangeText={(e) => handleSearch(e)}
          clearButtonMode="always"
        />
      </View>
      <SearchResults
        searchResult={searchResult}
        searched={searched}
        navigate={props.navigation.navigate}
      ></SearchResults>
    </View>
  );
}

export default function Search() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Search",
          headerStyle: {
            backgroundColor: "#171717",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: true,
          headerTransparent: false
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
  search: {
    marginBottom: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 0,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    margin: 10,
    backgroundColor: "#fff",
  },
});
