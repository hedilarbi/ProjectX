import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../../screens/authScreens/OnBoardingScreen";
import SigninScreen from "../../screens/authScreens/SigninScreen";
import SignupScreen from "../../screens/authScreens/SignupScreen";
import OTPScreen from "../../screens/authScreens/OTPScreen";
import ForgotPasswordScreen from "../../screens/authScreens/ForgotPasswordScreen";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="OTP"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
