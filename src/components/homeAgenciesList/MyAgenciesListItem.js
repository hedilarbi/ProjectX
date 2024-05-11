import { View, Image } from "react-native";
import React from "react";

const MyAgenciesListItem = ({ item }) => {
  return (
    <View
      className="bg-slate-200 h-36 w-48 mr-6 rounded-md"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ resizeMode: "cover" }}
        className="rounded-md w-full h-full"
      />
    </View>
  );
};

export default MyAgenciesListItem;
