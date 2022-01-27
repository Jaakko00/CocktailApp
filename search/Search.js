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

export default function Search() {
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
      <SearchResults searchResult={searchResult} searched={searched}></SearchResults>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#171717" },
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
