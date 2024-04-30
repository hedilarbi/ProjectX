import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import CreateTourInput from "../../components/CreateTourInput";
import CreateTourDatePicker from "../../components/CreateTourDatePicker";
import CreateTourDestinations from "../../components/CreateTourDestinations";
import CreateTourImagePicker from "../../components/CreateTourImagePicker";

const CreateTourScreen = () => {
  const [name, setName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [image, setImage] = useState(null);
  const [destinations, setDestinations] = useState([]);

  const createTour = () => {
    console.log({
      name,
      startDate,
      startTime,
      image,
      destinations,
    });
  };

  return (
    <View className="p-2 flex-1">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <CreateTourInput
          label="Nom"
          setter={setName}
          value={name}
          placeHolder="Nom du tour"
        />
        <View className="mt-2">
          <Text className="font-roboto-bold text-base text-gray-500">Date</Text>
          <CreateTourDatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            startTime={startTime}
            setStartTime={setStartTime}
          />
        </View>
        <View className="mt-2">
          <Text className="font-roboto-bold text-base text-gray-500">
            Tour Image
          </Text>
          <CreateTourImagePicker image={image} setImage={setImage} />
        </View>
        <View className="mt-2">
          <Text className="font-roboto-bold text-base text-gray-500">
            Destinations
          </Text>
          <CreateTourDestinations
            destinations={destinations}
            setDestinations={setDestinations}
          />
        </View>
        <View className="flex-1 justify-end mt-4">
          <TouchableOpacity
            className="bg-green-500 py-2 rounded-sm"
            onPress={createTour}
          >
            <Text className="font-roboto-bold text-base text-center text-white">
              Creer
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateTourScreen;
