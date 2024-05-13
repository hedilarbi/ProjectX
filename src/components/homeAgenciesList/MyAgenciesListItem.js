import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyAgenciesListItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-slate-200 h-36 w-56 mr-6 rounded-md"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
      onPress={() => navigation.navigate("Agency", { id: item._id })}
    >
      <Image
        source={{ uri: item.image }}
        style={{ resizeMode: "cover" }}
        className="rounded-md w-full h-full"
      />
    </TouchableOpacity>
  );
};

export default MyAgenciesListItem;
