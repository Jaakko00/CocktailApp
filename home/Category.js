import react, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DrinkSquare from "./DrinkSquare";

export default function Category(props) {
  let results;
  let noResults = (
    <View style={styles.results}>
      <Text style={styles.noResults}>
        Sadly nothing matched with your search
      </Text>
    </View>
  );
  if (props.searchResult !== null) {
    results = props.searchResult.map(
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
      <ScrollView
      horizontal>
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
