import react, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrinkCard(props) {
  let handlePress = () => {
    props.navigate("DrinkScreen", { id: props.id });
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.shadowProp}>
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: props.pic,
            }}
            style={styles.image}
            resizeMode="cover"
            imageStyle={{ opacity: 0.7 }}
          >
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>
                {props.name}
                <MaterialCommunityIcons
                  name="glass-cocktail"
                  size={25}
                ></MaterialCommunityIcons>
              </Text>

              <Text style={styles.cardInfo}>
                {props.alc}, {props.category}
              </Text>
            </View>

            
          </ImageBackground>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    margin: 10,
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderWidth: 0,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 300,
    width: "100%",
    borderWidth: 0,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
