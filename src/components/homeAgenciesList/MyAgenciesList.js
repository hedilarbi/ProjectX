import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors, AgengyList } from "../../constants";
import MyAgenciesListItem from "./MyAgenciesListItem";

const MyAgenciesList = () => {
  const agencies = AgengyList;

  return (
    <View className="mt-4">
      <View className="flex-row justify-between px-3">
        <Text className="font-nunito-bold text-dgry text-xl">Mes agences</Text>
        <TouchableOpacity className="flex-row items-center space-x-2">
          <Text className="font-nunito-bold text-base text-dgry">Tout</Text>
          <FontAwesome6 name="arrow-right-long" size={16} color={Colors.DGRY} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        className="p-3"
        data={agencies}
        renderItem={({ item }) => <MyAgenciesListItem item={item} />}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MyAgenciesList;
