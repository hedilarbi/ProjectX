import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddTourButton from "../../components/buttons/AddTourButton";
import ToursList from "../../components/ToursList";

const AgencyExploreScreen = () => {
  const inset = useSafeAreaInsets();
  const tours = [
    {
      id: 1,
      name: "Tour 1",
    },
    {
      id: 2,
      name: "Tour 2",
    },
    {
      id: 3,
      name: "Tour 3",
    },
  ];
  return (
    <View style={{ paddingTop: inset.top }} className="px-2 flex-1 pb-2">
      <ToursList tours={tours} />
      <AddTourButton />
    </View>
  );
};

export default AgencyExploreScreen;
