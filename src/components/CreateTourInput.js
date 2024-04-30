import { View, Text, TextInput } from "react-native";
import React from "react";

const CreateTourInput = ({ label, setter, placeHolder, value }) => {
  return (
    <View className="mt-2">
      <Text className="font-roboto-bold text-base text-gray-500">{label}</Text>
      <TextInput
        className=" bg-white rounded-sm font-roboto-medium text-base pb-4 px-2 pt-2 mt-2"
        placeholder={placeHolder}
        value={value}
        onChangeText={(text) => setter(text)}
      />
    </View>
  );
};

export default CreateTourInput;
