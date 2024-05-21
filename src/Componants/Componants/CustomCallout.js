import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { Marker } from "react-native-maps";

const screenWidth = Dimensions.get("window").width;

const CustomMarker = ({ place, onPress }) => {
  return (
    <Marker
      coordinate={{
        latitude: place.latitude,
        longitude: place.longitude,
      }}
      onPress={onPress}
    >
      <Image
        source={place.imageUrl}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: screenWidth * 0.8,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  triangle: {
    left: (screenWidth * 0.8) / 2 - 10,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 20,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "black",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
});

export default CustomMarker;
