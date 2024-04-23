import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgencyExploreScreen from "../../screens/agencyScreens/AgencyExploreScreen";

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
    </MenuStack.Navigator>
  );
};

export default AgencyHomeNavigation;
