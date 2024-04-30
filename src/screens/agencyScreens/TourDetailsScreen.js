import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const TourDetailsScreen = ({ navigation }) => {
  const tour = {
    destinations: [
      {
        address: "8V37+684، La Corniche، Banzart, Tunisia",
        latitude: 37.303212,
        longitude: 9.863343,
      },
      {
        address: "8V67+32 Bizerte, Tunisia",
        latitude: 37.31013675458062,
        longitude: 9.862531399696342,
      },
      {
        address: "8V55+4P Bizerte, Tunisia",
        latitude: 37.3078464886531,
        longitude: 9.85929540345482,
      },
      {
        address: "48 Kayas El Jdid، Tunisia",
        latitude: 37.30878906146933,
        longitude: 9.865944282866003,
      },
      {
        address: "8V86+M76، Kayas El Jdid، Bizerte 7000, Tunisia",
        latitude: 37.31766460895609,
        longitude: 9.860447512685525,
      },
    ],
    image:
      "file:///Users/hedilarbi/Library/Developer/CoreSimulator/Devices/1D5317E8-A857-4B4A-8ED8-4BD2CB2451CA/data/Containers/Data/Application/7CC4E339-4296-4C97-8EBD-E5957800C9EF/Library/Caches/ExponentExperienceData/@anonymous/ProjectX-785b8985-f71d-45ea-b1f0-064c878a89ee/ImagePicker/81F6FA02-DB99-411B-B46D-688B20C8F6AC.jpg",
    name: "Jumaji",
    startDate: "2024-04-28T10:46:00.000Z",
    startTime: "2024-04-26T13:07:00.000Z",
  };
  useEffect(() => {
    navigation.setOptions({ title: tour.name });
  }, []);
  return (
    <View className="flex-1 p-2">
      <Text>TourDetailsScreen</Text>
      <Text>Name: {tour.name}</Text>
      <Text>Start Date: {tour.startDate}</Text>
      <Text>Start Time: {tour.startTime}</Text>
      <Image
        source={{ uri: tour.image }}
        style={{ width: "100%", height: 144, resizeMode: "cover" }}
      />
    </View>
  );
};

export default TourDetailsScreen;
