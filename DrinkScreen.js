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

export default function DrinkScreen(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    console.log(props);
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

        <View style={styles.ingredients}>
          <Text>
            {searchResult.strMeasure1}
            {searchResult.strIngredient1}
          </Text>

          <Text>
            {searchResult.strMeasure2}
            {searchResult.strIngredient2}
          </Text>

          <Text>
            {searchResult.strMeasure3}
            {searchResult.strIngredient3}
          </Text>

          <Text>
            {searchResult.strMeasure4}
            {searchResult.strIngredient4}
          </Text>
        </View>

        <View style={styles.instructions}>
          <Text>{"Served from: " + searchResult.strGlass}</Text>
          <Text>{searchResult.strInstructions}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {},
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
    borderWidth: 0,
    borderRadius: 10,
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
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
