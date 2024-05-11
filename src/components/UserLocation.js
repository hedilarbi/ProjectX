import { View, Text } from "react-native";
import React from "react";

const UserLocation = ({ address }) => {
  return (
    <View
      style={{
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
      className="p-3 bg-white rounded-md mx-3 mt-3 "
    >
      <Text className="font-nunito-bold text-base text-dgry">
        Votre emplacement actuel
      </Text>
      <Text className="font-nunito-regular text-sm text-dgry">{address}</Text>
    </View>
  );
};

export default UserLocation;
