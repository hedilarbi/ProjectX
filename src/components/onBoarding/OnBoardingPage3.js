import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NavigateButton from "../buttons/NavigateButton";

const OnBoardingPage3 = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View
      style={{ width }}
      className="flex-1 justify-center items-center pt-6 px-9"
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />
      <View className="h-20 mt-3 ">
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
      <View className="mt-3 h-24 ">
        <Text className="text-center font-nunito-medium text-xl text-sc">
          {item.description}
        </Text>
      </View>
      <View className="flex-1 justify-center items-center w-full">
        <NavigateButton
          text="Commencer !"
          action={() => navigation.navigate("Signup")}
        />

        <TouchableOpacity
          className="items-center justify-center mt-3"
          onPress={() => navigation.navigate("Signin")}
        >
          <Text className="font-nunito-bold text-lg text-pr underline decoration-pr">
            J'ai déja un compte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingPage3;
