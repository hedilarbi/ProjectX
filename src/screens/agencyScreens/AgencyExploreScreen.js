import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AgencyExploreScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: inset.top }}>
      <TouchableOpacity className="bg-green-500 mt-5">
        <Text>AddTourButton</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AgencyExploreScreen;
