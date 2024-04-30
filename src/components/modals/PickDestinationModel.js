import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Location from "expo-location";
import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const PickDestinationModel = ({
  showDestinationPickerModel,
  setShowDestinationPickerModel,
  setDestinations,
  destinations,
}) => {
  const inset = useSafeAreaInsets();
  const markerRef = useRef();
  const mapRef = useRef();
  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);
  const [coords, setCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getUserLocation = async () => {
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
      setRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      });
      setCoords(
        new AnimatedRegion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        })
      );
      setDestination({
        address,
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlaceSelect = async (data, details) => {
    try {
      const { description } = details;

      const response = await Location.geocodeAsync(description);

      if (response?.length > 0) {
        const { latitude, longitude } = response[0];
        setDestination({ address: description, latitude, longitude });
        markerRef.current.animateMarkerToCoordinate(
          { longitude, latitude },
          7000
        );
        mapRef.current.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121,
          },
          1000
        );

        coords.timing({ latitude, longitude }, 1000).start();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleMarkerPlace = async (e) => {
    try {
      const { longitude, latitude } = e.nativeEvent.coordinate;

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const address = response.data.results[0].formatted_address;
      markerRef.current.animateMarkerToCoordinate(
        { longitude, latitude },
        7000
      );
      setDestination({ address, latitude, longitude });
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        },
        1000
      );

      coords.timing({ latitude, longitude }, 1000).start();
    } catch (err) {
      console.log(err);
    }
  };

  const addDestination = () => {
    setDestinations([...destinations, destination]);
    setShowDestinationPickerModel(false);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showDestinationPickerModel}
      onRequestClose={() => false}
      className=""
    >
      <View
        style={{
          flex: 1,
          paddingTop: inset.top,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: Dimensions.get("window").height * 0.9,
          }}
          className="bg-white border"
        >
          {isLoading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View className="flex-1">
              <View className="flex-row items-center justify-between px-3 ">
                <View style={{ width: 28 }} />
                <Text className=" font-roboto-bold text-lg my-4 text-center flex-1">
                  Choisir une destination
                </Text>
                <TouchableOpacity
                  onPress={() => setShowDestinationPickerModel(false)}
                >
                  <AntDesign name="close" size={28} color="black" />
                </TouchableOpacity>
              </View>
              <View className="absolute top-20 left-0  w-full  z-30 px-4  ">
                <GooglePlacesAutocomplete
                  placeholder="Search"
                  onPress={(data, details) => handlePlaceSelect(data, details)}
                  query={{
                    key: `${GOOGLE_MAPS_API_KEY}`,
                    language: "en",
                  }}
                />
              </View>
              <MapView
                style={{
                  flex: 1,
                }}
                onPress={(e) => {
                  handleMarkerPlace(e);
                }}
                ininitialRegion={region}
                region={region}
                ref={mapRef}
              >
                {destination && (
                  <Marker.Animated
                    coordinate={coords}
                    ref={markerRef}
                    title="Votre position"
                    description="Votre position actuelle"
                  />
                )}
              </MapView>
            </View>
          )}

          {!isLoading && (
            <View
              className="absolute bottom-0 left-0 w-full bg-white z-20 px-4 pt-4"
              style={{
                paddingBottom: inset.bottom,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            >
              <Text className="font-roboto-bold text-base">
                Adresse:{" "}
                <Text className="font-roboto-medium text-gray-500 ">
                  {destination.address}
                </Text>
              </Text>
              <TouchableOpacity
                className="bg-green-500 rounded-sm py-2 mt-4 mb-4"
                onPress={addDestination}
              >
                <Text className="font-roboto-bold text-center text-white text-base ">
                  Ajouter
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default PickDestinationModel;
