import react, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DrinkSquare from "./DrinkSquare";
import DrinkCard from "../search/DrinkCard";
import axios from "axios";

export default function TodaysDrink(props) {
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
      .request(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(function (response) {
        if (response.data !== null) {
          setSearchResult(response.data.drinks[0]);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <View style={styles.category}>
      <Text style={styles.title}>You should try</Text>
      <DrinkCard
        id={searchResult.idDrink}
        name={searchResult.strDrink}
        category={searchResult.strCategory}
        alc={searchResult.strAlcoholic}
        pic={searchResult.strDrinkThumb}
        navigate={props.navigate}
      ></DrinkCard>
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
