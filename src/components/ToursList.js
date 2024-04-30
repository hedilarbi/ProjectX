import { View, Text, ScrollView } from "react-native";
import React from "react";
import TourCard from "./TourCard";

const ToursList = ({ tours }) => {
  return (
    <ScrollView className="flex-1 mt-2">
      {tours.map((tour, index) => (
        <TourCard tour={tour} index={index} key={index} />
      ))}
    </ScrollView>
  );
};

export default ToursList;
