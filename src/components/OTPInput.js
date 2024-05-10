import { View, TextInput } from "react-native";
import React, { useRef } from "react";

const OTPInput = ({ otp, setOtp }) => {
  const inputs = Array(6)
    .fill(0)
    .map((_, i) => useRef(null));

  const handleInputChange = (text, index) => {
    inputs[index].current.value = text;

    if (text.length === 1 && index < 5) {
      inputs[index + 1].current.focus();
    }
    const newOtp = otp.substring(0, index) + text + otp.substring(index + 1);
    setOtp(newOtp);
  };

  const handleKeyPress = (key, index) => {
    if (key === "Backspace") {
      if (
        index > 0 &&
        (inputs[index].current.value === "" || !inputs[index].current.value)
      ) {
        inputs[index - 1].current.focus();
      }
    }
    if (Number(key) && inputs[index].current?.value?.length > 0 && index < 5) {
      inputs[index + 1].current.focus();
      inputs[index + 1].current.value = key;
      const newOtp = otp.substring(0, index) + key + otp.substring(index + 1);
      setOtp(newOtp);
    }
  };
  return (
    <View className="w-full flex-row justify-between mt-9  ">
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          className="w-12 h-12 border-b-2 border-pr text-center font-nunito-bold text-2xl text-sc"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInputChange(text, index)}
          ref={input}
          value={otp[index]}
          onKeyPress={({ nativeEvent }) =>
            handleKeyPress(nativeEvent.key, index)
          }
        />
      ))}
    </View>
  );
};

export default OTPInput;
