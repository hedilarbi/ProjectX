import { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

export default function useLocationPicker({ navigation }) {
  const [userLocation, setUserLocation] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      console.log("none");
      return;
    }
    try {
      const location = await getCurrentPositionAsync();
      setUserLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      console.error("Error getting location:", error);
      // Handle error, maybe show an alert to the user
    }
  }

  useEffect(() => {
    getLocationHandler();
  }, []); // Make sure to provide an empty dependency array to useEffect

  return userLocation;
}
