import React from "react";
import OnBoarding from "../../components/onBoarding/OnBoarding";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
const OnBoardingScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: inset.top }}
      className="flex-1 bg-white justify-center items-center"
    >
      <OnBoarding />
    </View>
  );
};

export default OnBoardingScreen;
