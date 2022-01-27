import react, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DrinkSquare from "./DrinkSquare";
import axios from "axios";

export default function NonAlcoholic(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    handleSearch();
  });

  let handleSearch = () => {
    if (!searched) {
      searchAlcoholic(props.category);
      setSearched(true);
    }
  };

  let searchAlcoholic = (category) => {
    axios
      .request(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`
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


  let results;
  if (searchResult !== null) {
    results = searchResult.map(
      ({ strDrink, idDrink, strCategory, strAlcoholic, strDrinkThumb }) => (
        <DrinkSquare
          key={idDrink}
          id={idDrink}
          name={strDrink}
          category={strCategory}
          alc={strAlcoholic}
          pic={strDrinkThumb}
          navigate={props.navigate}
        ></DrinkSquare>
      )
    );
  }

  return (
    <View style={styles.category}>
      <Text style={styles.title}>Non alcoholic</Text>
      <ScrollView horizontal>{results}</ScrollView>
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
    marginTop: 10,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
