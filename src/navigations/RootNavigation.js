import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./authNavigation/AuthNavigation";
import UserTabNavigation from "./userNavigation/UserTabNavigation";
import AgencyScreen from "../screens/userScreens/AgencyScreen";
import TourScreen from "../screens/userScreens/TourScreen";
import MapScreen from "../screens/userScreens/MapScreen";

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* <RootStack.Screen
          name="Auth"
          component={AuthNavigation}
          options={{
            headerShown: false,
          }}
        /> */}
        <RootStack.Screen
          name="UserTab"
          component={UserTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Agency"
          component={AgencyScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Tour"
          component={TourScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
