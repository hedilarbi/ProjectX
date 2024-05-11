import { Animated, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { useRef } from "react";
const Skeleton = ({ width, height, style }) => {
  const translateX = useRef(new Animated.Value(-width)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: "100%",
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);
  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: "rgba(0,0,0,0.12)",
          overflow: "hidden",
        },
        style,
      ]}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: translateX }],
        }}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%" }}
          colors={["transparent", "rgba(0,0,0,0.05)", "transparent"]}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
