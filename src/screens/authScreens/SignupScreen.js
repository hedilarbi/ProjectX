import { View, Text } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ScreenHeader from "../../components/ScreenHeader";
import FormInput from "../../components/FormInput";
import NavigateButton from "../../components/buttons/NavigateButton";
import { emailValidator } from "../../utils/validators";
import { useNavigation } from "@react-navigation/native";
const SignupScreen = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    message: "",
    type: null,
  });
  const handleSignup = () => {
    const validEmail = emailValidator(email);
    if (password !== confirmPassword) {
      setError({
        message: "Les mots de passe ne correspondent pas",
        type: "password",
      });
      return;
    }
    if (!validEmail) {
      setError({
        message: "Veuillez entrer une adresse mail valide",
        type: "email",
      });

      return;
    }
    setError({
      message: "",
      type: null,
    });
    navigation.navigate("OTP");
  };
  return (
    <View style={{ paddingTop: inset.top, paddingHorizontal: 12 }}>
      <ScreenHeader logo={true} />
      <View className=" mt-14">
        <Text className="font-nunito-bold text-3xl text-sc text-center px-6">
          Inscrivez-vous avec votre adresse mail
        </Text>

        <View className="w-full h-8  mt-4 justify-center">
          {error.message.length > 0 && (
            <Text className="text-warning-red font-nunito-bold text-center">
              {error.message}
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
              borderColor:
                error.type === "email" ? "#E21C4A" : "rgb(209,213,219)",
            }}
          />
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
        </View>

        <NavigateButton
          text="S'inscrire"
          style={{ marginTop: 36 }}
          action={handleSignup}
        />
      </View>
    </View>
  );
};

export default SignupScreen;
