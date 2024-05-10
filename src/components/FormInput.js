import { TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
const FormInput = ({ placeHolder, value, setter, style, inputType, icon }) => {
  const [secure, setSecure] = useState(inputType);
  const handleShowPassword = () => {
    if (secure === "password") {
      setSecure("text");
    } else {
      setSecure("password");
    }
  };
  return (
    <View
      className="w-full  rounded-md border flex-row items-center px-2"
      style={style}
    >
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={(text) => setter(text)}
        className=" py-3 font-nunito-medium text-base flex-1"
        secureTextEntry={secure === "password" ? true : false}
        autoCorrect={false}
        textContentType={"oneTimeCode"}
      />
      {icon && (
        <TouchableWithoutFeedback onPress={handleShowPassword}>
          <Entypo
            name={secure === "password" ? "eye" : "eye-with-line"}
            size={24}
            color="rgb(209,213,219)"
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default FormInput;
