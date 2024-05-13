import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
const PlaceDetailsModal = ({
  showPlaceDetailsModal,
  place,
  setShowPlaceDetailsModal,
}) => {
  const inset = useSafeAreaInsets();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showPlaceDetailsModal}
      onRequestClose={() => false}
    >
      <View
        style={{
          flex: 1,
          paddingTop: inset.top,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginBottom: inset.bottom,
          }}
          className="bg-white border h-auto pb-8"
        >
          <View className="p-2 flex-row justify-end">
            <TouchableOpacity onPress={() => setShowPlaceDetailsModal(false)}>
              <Entypo name="cross" size={36} color="#85C872" />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: place.image }}
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
          />
          <View className="mt-4 px-3">
            <View className="flex-row justify-between items-center">
              <Text className="font-nunito-bold text-lg text-dgry">
                {place.name}
              </Text>
              <Text className="font-nunito-medium text-base text-dgry">
                {" "}
                {place.duration}
              </Text>
            </View>
            <Text className="font-nunito-medium text-base text-lgry mt-2">
              {place.description}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PlaceDetailsModal;
