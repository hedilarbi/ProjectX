import {
  Animated,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import NavigateButton from "../buttons/NavigateButton";
import OTPInput from "../OTPInput";
import { AntDesign, Entypo } from "@expo/vector-icons";
import FormInput from "../FormInput";
const PasswordSlide = ({ width, slideAnimValue, handlePrevious }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = () => {
    if (otp.length < 6) {
      setError("Veuillez entrer un code de 6 chiffres");
      return;
    }
    setError("");
    handleNext();
  };
  return (
    <Animated.View
      style={{
        width,
        paddingHorizontal: 12,
        paddingVertical: 12,
        transform: [{ translateX: slideAnimValue }],
      }}
    >
      <View className="flex-row justify-between items-center mt-3">
        <TouchableWithoutFeedback onPress={handlePrevious}>
          <AntDesign name="back" size={32} color="#85C872" />
        </TouchableWithoutFeedback>

        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />

        <View className="w-8" />
      </View>
      <View className="items-center flex-1 px-3 mt-14 w-full">
        <Text className="text-center font-nunito-bold text-2xl text-sc px-6">
          Entrez votre nouveaux mot de passe
        </Text>
        <View className="w-full h-8  mt-4 justify-center">
          {error.length > 0 && (
            <Text className="text-warning-red font-nunito-bold text-center">
              {error}
            </Text>
          )}
        </View>

        <FormInput
          placeHolder="Mot de passe"
          value={password}
          setter={setPassword}
          style={{
            marginTop: 12,
            borderColor: "rgb(209,213,219)",
          }}
          inputType="password"
          icon={true}
        />
        <FormInput
          placeHolder="Confirmer le mot de passe"
          value={confirmPassword}
          setter={setConfirmPassword}
          style={{
            marginTop: 12,
            borderColor:
              error.type === "password" ? "#E21C4A" : "rgb(209,213,219)",
          }}
          inputType="password"
          icon={true}
        />
        <NavigateButton
          text="Enregistrer"
          style={{ marginTop: 42 }}
          action={handleChangePassword}
        />
      </View>
    </Animated.View>
  );
};

export default PasswordSlide;
