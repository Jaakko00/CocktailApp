import react, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import DrinkCard from "./DrinkCard";

export default function SearchResults(props) {
    let results;
    if(props.searchResult !== null) {

        results = 
          props.searchResult.map(
            ({ strDrink, idDrink, strCategory, strAlcoholic, strDrinkThumb }) => (
              <DrinkCard
                key={idDrink}
                name={strDrink}
                category={strCategory}
                alc={strAlcoholic}
                pic={strDrinkThumb}
              ></DrinkCard>
            )
          );
    }
  
  return (
    <View>
      <ScrollView>
        {results}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
