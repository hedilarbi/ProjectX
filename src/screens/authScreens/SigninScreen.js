import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ScreenHeader from "../../components/ScreenHeader";
import FormInput from "../../components/FormInput";
import NavigateButton from "../../components/buttons/NavigateButton";
import { emailValidator } from "../../utils/validators";
import { useNavigation } from "@react-navigation/native";
const SigninScreen = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    message: "",
    type: null,
  });
  const handleSignin = () => {
    const validEmail = emailValidator(email);

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
  };
  return (
    <View style={{ paddingTop: inset.top, paddingHorizontal: 12 }}>
      <ScreenHeader logo={true} />
      <View className=" mt-14">
        <Text className="font-nunito-bold text-3xl text-sc text-center px-6">
          Heureux de vous revoir
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
        </View>

        <NavigateButton
          text="Connexion"
          style={{ marginTop: 36 }}
          action={handleSignin}
        />
        <TouchableOpacity
          className="items-center justify-center mt-4"
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text className="font-nunito-bold text-lg text-pr underline decoration-pr">
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;
