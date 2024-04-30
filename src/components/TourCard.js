import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const TourCard = ({ tour, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white p-2 mb-2 rounded-sm"
      onPress={() => navigation.navigate("TourDetails", { id: tour.id })}
    >
      <View className="flex-row justify-between items-center">
        <Text className="font-roboto-medium text-lg">{tour.name}</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;
