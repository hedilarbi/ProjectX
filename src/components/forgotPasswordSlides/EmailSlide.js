import { Animated, Image, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenHeader from "../ScreenHeader";
import { emailValidator } from "../../utils/validators";
import FormInput from "../FormInput";
import NavigateButton from "../buttons/NavigateButton";

const EmailSlide = ({ width, slideAnimValue, handleNext }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = () => {
    const isEmailValid = emailValidator(email);
    if (!isEmailValid) {
      setError("Veuillez entrer une adresse mail valide");
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
      <ScreenHeader logo={true} />
      <View className="mt-14">
        <Text className="text-center font-nunito-bold text-2xl text-sc px-9">
          Saisissez votre adresse mail
        </Text>

        <View className="w-full h-8  mt-4 justify-center">
          {error.length > 0 && (
            <Text className="text-warning-red font-nunito-bold text-center">
              {error}
            </Text>
          )}
        </View>

        <View className="mt-4">
          <FormInput
            placeHolder="Email"
            value={email}
            setter={setEmail}
            style={{
              marginTop: 12,
              borderColor: error.length > 0 ? "#E21C4A" : "rgb(209,213,219)",
            }}
          />
        </View>

        <NavigateButton
          text="Envoyer le code de vérification"
          style={{ marginTop: 36 }}
          action={handleSendOtp}
        />
      </View>

      {/* <LinearGradientWrapper style={{ marginTop: 46 }}>
        <TouchableOpacity
          style={name.length > 0 ? styles.btn : styles.btn_inactive}
          onPress={handleNext}
          disabled={name.length > 0 ? false : true}
        >
          <Text style={styles.btn_text}>Continuer</Text>
          <FontAwesome5 name="long-arrow-alt-right" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradientWrapper> */}
    </Animated.View>
  );
};

export default EmailSlide;
