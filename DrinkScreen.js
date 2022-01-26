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

export default function DrinkScreen(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
      console.log(props)
    handleSearch();
    
  });

  let handleSearch = () => {
    if (!searched) {
      searchById();
      setSearched(true);
    }
  };

  let searchById = () => {
    if (props.route.params.id != null) {
      axios
        .request(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.route.params.id}`
        )
        .then(function (response) {
          if (response.data !== null) {
            setSearchResult(response.data.drinks[0]);
            console.log(response.data.drinks[0].strDrink);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.results}>
      <Text>{searched && searchResult.strDrink}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    borderWidth: 0,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
