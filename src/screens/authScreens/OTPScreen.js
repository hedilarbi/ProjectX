import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import OTPInput from "../../components/OTPInput";
import ScreenHeader from "../../components/ScreenHeader";
import NavigateButton from "../../components/buttons/NavigateButton";

const OTPScreen = () => {
  const inset = useSafeAreaInsets();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState({ message: "" });

  const handleOtp = () => {
    if (otp.length < 6) {
      setError({
        message: "Veuillez entrer un code de 6 chiffres",
      });
      return;
    }
    setError({
      message: "",
    });
  };

  return (
    <View style={{ paddingTop: inset.top }} className="flex-1 bg-white px-3">
      <ScreenHeader logo={true} />
      <View className="items-center flex-1 px-3 mt-20">
        <Text className="text-center font-nunito-bold text-2xl text-sc px-6">
          Votre code de vérification est…
        </Text>
        <View className="w-full h-8  mt-4 justify-center">
          {error.message.length > 0 && (
            <Text className="text-warning-red font-nunito-bold text-center">
              {error.message}
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
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    paddingHorizontal: 12,
  },
  otp_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
    width: "100%",
  },
  input: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  btn: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 32,
    width: "100%",
  },
  btn_inactive: {
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 32,
    width: "100%",
  },
  btn_text: {
    color: "white",
    marginRight: 24,
    marginTop: -4,
  },
  info_txt: {
    marginLeft: 12,
    marginTop: -5,
  },
});
