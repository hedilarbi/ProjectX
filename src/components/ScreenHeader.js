import { View, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ScreenHeader = ({ logo }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center mt-3">
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <AntDesign name="back" size={32} color="#85C872" />
      </TouchableWithoutFeedback>
      {logo && (
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />
      )}
      <View className="w-8" />
    </View>
  );
};

export default ScreenHeader;
