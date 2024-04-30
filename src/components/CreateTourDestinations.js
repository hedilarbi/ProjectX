import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import PickDestinationModel from "./modals/PickDestinationModel";

const CreateTourDestinations = ({ destinations, setDestinations }) => {
  const [showDestinationPickerModel, setShowDestinationPickerModel] =
    useState(false);
  const deleteDestination = (index) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };
  return (
    <View>
      <PickDestinationModel
        showDestinationPickerModel={showDestinationPickerModel}
        setShowDestinationPickerModel={setShowDestinationPickerModel}
        destinations={destinations}
        setDestinations={setDestinations}
      />
      {destinations.map((destination, index) => (
        <View
          key={index}
          className="bg-white p-2 rounded-sm mt-3 flex-row  justify-between items-center"
        >
          <Text
            className="font-roboto-medium text-base"
            style={{ width: "80%" }}
            numberOfLines={1}
          >
            {destination.address}
          </Text>
          <TouchableOpacity onPress={() => deleteDestination(index)}>
            <Entypo name="trash" size={20} color="#E21C4A" />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        className="bg-green-500 mt-3 py-2 rounded-sm items-center "
        onPress={() => setShowDestinationPickerModel(true)}
      >
        <View className="flex-row justify-center gap-2">
          <Entypo name="plus" size={24} color="white" />
          <Text className="text-white font-roboto-bold text-base">
            Ajouter une destination
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTourDestinations;
