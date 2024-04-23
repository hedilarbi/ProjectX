import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Tracker } from "./src/Componants/test"; // Import the Tracker component

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    // You can return a loading indicator here if needed
    return null;
  }

  return (
    <View style={styles.container}>
      <Tracker />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
