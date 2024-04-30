import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const AddTourButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-green-500 mt-5 py-2 rounded-sm items-center "
      onPress={() => navigation.navigate("Createtour")}
    >
      <View className="flex-row justify-center gap-2">
        <Entypo name="plus" size={24} color="white" />
        <Text className="text-white font-roboto-bold text-base">
          Creer un tour
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddTourButton;
