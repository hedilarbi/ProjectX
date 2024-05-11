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
const OTPSlide = ({ width, slideAnimValue, handleNext, handlePrevious }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtp = () => {
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
          Votre code de vérification est…
        </Text>
        <View className="w-full h-8  mt-4 justify-center">
          {error.length > 0 && (
            <Text className="text-warning-red font-nunito-bold text-center">
              {error}
            </Text>
          )}
        </View>

        <OTPInput otp={otp} setOtp={setOtp} />
        <NavigateButton
          text="Valider"
          style={{ marginTop: 42 }}
          action={handleOtp}
        />
        <View className="flex-row items-start mt-9 pr-9">
          <Entypo name="info-with-circle" size={24} color="#285A84" />
          <Text className="ml-3 font-nunito-medium text-tgry text-sm">
            Entrez ici le code reçu à l’adresse mon-email@ici, pour modifier
            votre mot de passe
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default OTPSlide;
