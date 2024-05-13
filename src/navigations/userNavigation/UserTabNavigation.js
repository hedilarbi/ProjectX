import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Colors, Fonts } from "../../constants";

import HomeScreen from "../../screens/userScreens/HomeScreen";
import ProfileNavigation from "./ProfileNavigation";
import ExploreScreen from "../../screens/userScreens/ExploreScreen";
import MyTourScreen from "../../screens/userScreens/MyTourScreen";
const UserTabNavigation = () => {
  const MainTab = createBottomTabNavigator();

  return (
    <>
      <MainTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = focused ? (
                  <FontAwesome name="home" size={30} color={Colors.PR} />
                ) : (
                  <FontAwesome name="home" size={30} color={Colors.DGRY} />
                );
                break;
              case "Explore":
                iconName = focused ? (
                  <Entypo name="magnifying-glass" size={30} color={Colors.PR} />
                ) : (
                  <Entypo
                    name="magnifying-glass"
                    size={30}
                    color={Colors.DGRY}
                  />
                );
                break;
              case "MyTour":
                iconName = focused ? (
                  <FontAwesome5
                    name="map-marked-alt"
                    size={26}
                    color={Colors.PR}
                  />
                ) : (
                  <FontAwesome5
                    name="map-marked-alt"
                    size={26}
                    color={Colors.DGRY}
                  />
                );
                break;

              case "ProfileNav":
                iconName = focused ? (
                  <FontAwesome5 name="user-alt" size={26} color={Colors.PR} />
                ) : (
                  <FontAwesome5 name="user-alt" size={26} color={Colors.DGRY} />
                );
                break;
            }

            return iconName;
          },
          tabBarActiveTintColor: Colors.PR,
          tabBarInactiveTintColor: Colors.DGRY,
          tabBarStyle: {
            paddingBottom: 24,
            paddingTop: 8,
            height: 80,
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            fontFamily: Fonts.NUNITO_BOLD,

            fontSize: 10,
          },
        })}
      >
        <MainTab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, title: "Accueil" }}
        />
        <MainTab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ headerShown: false, title: "Explorer" }}
        />
        <MainTab.Screen
          name="MyTour"
          component={MyTourScreen}
          options={{ headerShown: false, title: "Mes Tours" }}
        />

        <MainTab.Screen
          name="ProfileNav"
          component={ProfileNavigation}
          options={{ headerShown: false, title: "Mon Profil" }}
        />
      </MainTab.Navigator>
    </>
  );
};

export default UserTabNavigation;
