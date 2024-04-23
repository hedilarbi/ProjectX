import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddTourButton from "../../components/buttons/AddTourButton";

const AgencyExploreScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: inset.top }}>
      <AddTourButton />
    </View>
  );
};

export default AgencyExploreScreen;
