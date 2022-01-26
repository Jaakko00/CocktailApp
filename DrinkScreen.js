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

export default function DrinkScreen({ navigation }, props) {
  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    handleSearch();
  });

  let handleSearch = () => {
    if (!searched) {
      searchCategory(props.category);
      setSearched(true);
    }
  };

  let searchCategory = (category) => {
    console.log("fetching category");
    axios
      .request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
      .then(function (response) {
        if (response.data !== null) {
          setSearchResult(response.data.drinks[0]);
          console.log(response.data.drinks[0].strDrink)
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View
      style={styles.results}
    >
        <Text>
            {searched && searchResult.strDrink}
        </Text>
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
