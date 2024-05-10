import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { FontAwesome6 } from "@expo/vector-icons";

const OnBoardingPage2 = ({ item, flatListRef, setCurrentIndex }) => {
  const { width } = useWindowDimensions();

  const handleNext = () => {
    flatListRef.current.scrollToIndex({
      index: 2,
      animated: true,
      duration: 5000,
    });

    setCurrentIndex(2);
  };
  return (
    <View style={{ width }} className="flex-1 pt-6 px-9 items-center">
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />

      <View className="h-20 mt-3">
        <Text className="text-center font-nunito-bold text-2xl  text-sc">
          {item.title}
        </Text>
      </View>
      <Image
        source={item.image}
        style={{
          width: 300,
          height: 220,
          resizeMode: "contain",
          marginTop: 20,
        }}
      />
      <View className="mt-3 h-24">
        <Text className="text-center font-nunito-medium text-xl text-sc">
          {item.description}
        </Text>
      </View>

      <View className="flex-1 justify-center items-center">
        <TouchableOpacity onPress={handleNext}>
          <FontAwesome6 name="arrow-right-long" size={42} color="#85C872" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingPage2;
