import { Animated, Keyboard, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmailSlide from "../../components/forgotPasswordSlides/EmailSlide";
import OTPSlide from "../../components/forgotPasswordSlides/OTPSlide";
import PasswordSlide from "../../components/forgotPasswordSlides/PasswordSlide";

const ForgotPasswordScreen = () => {
  const inset = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [currentStep, setCurrentStep] = useState(0);
  const [slideAnimValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(slideAnimValue, {
      toValue: -width * currentStep,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentStep]);

  const handleNext = () => {
    Keyboard.dismiss();
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    Keyboard.dismiss();
    setCurrentStep(currentStep - 1);
  };

  return (
    <View
      style={{ paddingTop: inset.top }}
      className="flex-1 bg-white flex-row"
    >
      <EmailSlide
        width={width}
        slideAnimValue={slideAnimValue}
        handleNext={handleNext}
      />
      <OTPSlide
        width={width}
        slideAnimValue={slideAnimValue}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <PasswordSlide
        width={width}
        slideAnimValue={slideAnimValue}
        handlePrevious={handlePrevious}
      />
    </View>
  );
};

export default ForgotPasswordScreen;
