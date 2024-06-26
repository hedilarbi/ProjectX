import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AgencyHomeNavigation from "./AgencyHomeNavigation";
import { Ionicons } from "@expo/vector-icons";

const AgencyTabNavigation = () => {
  const MainTab = createBottomTabNavigator();
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? (
                <Ionicons name="home" size={24} color="#22c55e" />
              ) : (
                <Ionicons name="home-outline" size={24} color="#827B7B" />
              );
              break;
          }

          return iconName;
        },
        tabBarActiveTintColor: "#22c55e",
        tabBarInactiveTintColor: "#827B7B",
        tabBarLabelStyle: {
          fontFamily: "Roboto_700Bold",
        },
      })}
    >
      <MainTab.Screen
        name="Home"
        component={AgencyHomeNavigation}
        options={{ headerShown: false, title: "Acceuil" }}
      />
    </MainTab.Navigator>
  );
};

export default AgencyTabNavigation;
