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

export default function Home() {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([{}]);

  useEffect(() => {
    if (search == null) {
      searchCocktail("");
    }
  });

  let searchCocktail = (e) => {
    console.log(e);
    axios
      .request(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=shot`
      )
      .then(function (response) {
        if (response.data !== null) {
          setSearchResult(response.data.drinks);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        
      </View>
      <SearchResults searchResult={searchResult}></SearchResults>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  search: {
    marginBottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 0,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    padding: 10,
    fontSize: 20,
  },
});
