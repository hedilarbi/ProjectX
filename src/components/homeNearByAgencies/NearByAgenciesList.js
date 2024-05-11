import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import NearByAgenciesListItem from "./NearByAgenciesListItem";
import { Colors, AgengyList } from "../../constants";
import { FontAwesome6 } from "@expo/vector-icons";
const NearByAgenciesList = () => {
  const agencies = AgengyList;
  return (
    <View className="mt-4">
      <View className="flex-row justify-between px-3">
        <Text className="font-nunito-bold text-dgry text-xl">
          Agences pret de chez vous
        </Text>
        <TouchableOpacity className="flex-row items-center space-x-2">
          <Text className="font-nunito-bold text-base text-dgry">Tout</Text>
          <FontAwesome6 name="arrow-right-long" size={16} color={Colors.DGRY} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        className="p-3"
        data={agencies}
        renderItem={({ item }) => <NearByAgenciesListItem item={item} />}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NearByAgenciesList;
