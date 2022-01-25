import react, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function DrinkCard(props) {
  return (
    <View style={styles.shadowProp}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: props.pic,
          }}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{props.name}</Text>
            <Text style={styles.cardInfo}>
              {props.alc}, {props.category}
            </Text>
          </View>
          <View></View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderWidth: 0,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 300,
    width: 500,
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
    fontSize: 15,
    marginTop: 5,
    fontStyle: "italic",
    color: "#fff",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
