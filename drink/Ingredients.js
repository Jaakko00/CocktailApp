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

function Ingredient(props) {
  return (
    <View>
      {props.searchResult.strIngredient1 != null && (
        <View style={styles.ingredient}>
          <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
            {props.searchResult.strIngredient1}
          </Text>
          <Text style={styles.ingredientText}>
            {props.searchResult.strMeasure1}
          </Text>
        </View>
      )}
    </View>
  );
}

export default function Ingredients(props) {
  return (
    <View style={[styles.ingredientBox, styles.shadowProp]}>
        <Text style={styles.ingredientTitle}>Ingredients</Text>
      <View style={styles.ingredients}>
        {props.searchResult.strIngredient1 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient1}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure1}
            </Text>
          </View>
        )}

        {props.searchResult.strIngredient2 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient2}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure2}
            </Text>
          </View>
        )}

        {props.searchResult.strIngredient3 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient3}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure3}
            </Text>
          </View>
        )}

        {props.searchResult.strIngredient4 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient4}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure4}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient5 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient5}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure5}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient6 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient6}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure6}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient7 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient7}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure7}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient8 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient8}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure8}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient9 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient9}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure9}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient10 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient10}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure10}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient11 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient11}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure11}
            </Text>
          </View>
        )}
        {props.searchResult.strIngredient12 != null && (
          <View style={styles.ingredient}>
            <Text style={[styles.ingredientText, { fontWeight: "bold" }]}>
              {props.searchResult.strIngredient12}
            </Text>
            <Text style={styles.ingredientText}>
              {props.searchResult.strMeasure12}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  ingredientBox: {
    borderWidth: 0,
    margin: 20,
    backgroundColor: "transparent",
  },
  ingredients: {
    borderWidth: 0,
    margin: 0,
    marginBottom: 15,
  },
  ingredient: {
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ingredientText: {
    color: "#fff",
    fontSize: 15,
  },
  ingredientTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 0,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});
