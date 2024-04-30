import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgencyExploreScreen from "../../screens/agencyScreens/AgencyExploreScreen";
import CreateTourScreen from "../../screens/agencyScreens/CreateTourScreen";
import TourDetailsScreen from "../../screens/agencyScreens/TourDetailsScreen";

const AgencyHomeNavigation = () => {
  const MenuStack = createNativeStackNavigator();

  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="Explore"
        component={AgencyExploreScreen}
        options={{
          headerShown: false,
        }}
      />
      <MenuStack.Screen
        name="Createtour"
        component={CreateTourScreen}
        options={{
          title: "Creer un tour",
        }}
      />
      <MenuStack.Screen
        name="TourDetails"
        component={TourDetailsScreen}
        options={{
          title: "Tour",
        }}
      />
    </MenuStack.Navigator>
  );
};

export default AgencyHomeNavigation;
