import axios from "axios";
import * as Location from "expo-location";
import { GOOGLE_MAPS_API_KEY } from "@env";
const getLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denie");
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000,
      timeout: 15000,
    });
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=${GOOGLE_MAPS_API_KEY}`
    );
    const address = response.data.results[0].formatted_address;
    return { address, coords };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export default getLocation;
