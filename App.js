import React from "react";
import RootNavigation from "./src/navigations/RootNavigation";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigation />;
}
