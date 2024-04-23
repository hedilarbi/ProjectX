import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgencyTabNavigation from "./agencyNavigation/AgencyTabNavigation";

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Auth"
          component={AgencyTabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
