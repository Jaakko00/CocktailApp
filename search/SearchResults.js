import react, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DrinkCard from "./DrinkCard";

export default function SearchResults(props) {
    let results;
    let noResults = (
      <View style={styles.results}>
        <Text style={styles.noResults}>
          Sadly nothing matched with your search
        </Text>
      </View>
    );
    if(props.searched) {
      
        results = 
          props.searchResult.map(
            ({ strDrink, idDrink, strCategory, strAlcoholic, strDrinkThumb }) => (
              <DrinkCard
                key={parseInt(idDrink)}
                id={idDrink}
                name={strDrink}
                category={strCategory}
                alc={strAlcoholic}
                pic={strDrinkThumb}
              ></DrinkCard>
            )
          );
    }
  
  return (
    <View >
      <ScrollView >
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
    }
});
