import react, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DrinkSquare from "./DrinkSquare";
import axios from "axios";

export default function Category(props) {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([{}]);

  useEffect(() => {
    if (search == null) {
      searchCategory(props.category);
    }
  });

  let searchCategory = (category) => {
    axios
      .request(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
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
  let noResults = (
    <View style={styles.results}>
      <Text style={styles.noResults}>
        Sadly nothing matched with your search
      </Text>
    </View>
  );
  if (searchResult !== null) {
    results = searchResult.map(
      ({ strDrink, idDrink, strCategory, strAlcoholic, strDrinkThumb }) => (
        <DrinkSquare
          key={idDrink}
          name={strDrink}
          category={strCategory}
          alc={strAlcoholic}
          pic={strDrinkThumb}
        ></DrinkSquare>
      )
    );
  }

  return (
    <View>
      <Text>{props.category}</Text>
      <ScrollView horizontal>
        {results}
        {results == null && noResults}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    alignItems: "center",
    justifyContent: "center",
  },
  noResults: {
    color: "#a3a3a3",
    margin: 20,
  },
});
