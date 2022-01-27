import react, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
} from "react-native";
import axios from "axios";
import Ingredients from "./Ingredients";

export default function DrinkScreen(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
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
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.results}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.info}>
          <ImageBackground
            source={{
              uri: searchResult.strDrinkThumb,
            }}
            style={styles.image}
            resizeMode="cover"
            imageStyle={{ opacity: 0.7 }}
          >
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{searchResult.strDrink}</Text>

              <Text style={styles.cardInfo}>
                {searchResult.strAlcoholic}, {searchResult.strCategory}
              </Text>
            </View>
          </ImageBackground>
        </View>

        <Ingredients searchResult={searchResult}></Ingredients>

        <View style={styles.instructions}>
          <Text style={styles.instructionTitle}>Instructions</Text>
          <Text style={[styles.text, { fontStyle: "italic", marginBottom: 5 }]}>
            {"Served from: " + searchResult.strGlass}
          </Text>
          <Text style={styles.text}>{searchResult.strInstructions}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  results: { backgroundColor: "#171717" },
  info: {
    height: 400,
    width: "100%",
    margin: 0,
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderWidth: 0,
    borderRadius: 0,
    overflow: "hidden",
  },
  image: {
    height: 400,
    width: "100%",
  },
  cardText: {
    borderWidth: 0,
    margin: 10,
  },
  cardTitle: {
    borderWidth: 0,
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "#E40066",
    textShadowRadius: 0,
    textShadowOffset: { width: 2, height: 2 },
  },
  cardInfo: {
    borderWidth: 0,
    fontSize: 20,
    marginTop: 5,
    fontStyle: "italic",
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
  instructions: {
    borderWidth: 0,
    borderRadius: 0,
    margin: 20,
    marginTop: 0,
  },
  instructionTitle: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 20,
    marginLeft: 0,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
