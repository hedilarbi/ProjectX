import { Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";

const NavigateButton = ({ text, action, style }) => {
  return (
    <TouchableOpacity
      onPress={action}
      className="w-full bg-pr py-2 justify-center items-center rounded-sm"
      style={style}
    >
      <Text className="font-nunito-bold text-white text-xl">{text}</Text>
    </TouchableOpacity>
  );
};

export default NavigateButton;
