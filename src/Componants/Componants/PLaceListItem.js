import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PLaceListItem = ({ place, containerStyle }) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={place.imageUrl} style={styles.image} />
      <Text style={styles.title}>{place.title}</Text>
      <Text style={styles.description}>{place.discription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: "100%",
    height: 180,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "Roboto",
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: "gray",
  },
});

export default PLaceListItem;
