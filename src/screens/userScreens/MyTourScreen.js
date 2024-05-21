import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_API_KEY } from "../../Componants/Componants/Location";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import { Dimensions } from "react-native";
import tours from "../../constants/Tours";

import BottomSheet from "../../Componants/Componants/BottomSheet";

const MAX_TRANSLATE_Y = -Dimensions.get("window").height / 2;

const MyTourScreen = () => {
  const [tourName] = useState(tours[0].nom);
  const [userLocation, setUserLocation] = useState({
    latitude: 37.211183,
    longitude: 10.155207,
  });
  const [loading, setLoading] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [MarkerClicked, setMarkerClicked] = useState(false); // State for button click
  const [selectedMarker, setSelectedMarker] = useState(null);

  const mapRef = useRef();
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      requestLocationPermission();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        /*setUserLocation((prevUserLocation) => ({
          latitude: prevUserLocation
            ? prevUserLocation.latitude + 0.001
            : location.coords.latitude + 0.001,
          longitude: prevUserLocation
            ? prevUserLocation.longitude + 0.001
            : location.coords.longitude + 0.001,
        }));*/
      } else {
        console.log("Location permission denied");
      }
    } catch (error) {
      console.error("Error getting location permission: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerClick = (lieu) => {
    setMarkerClicked(!MarkerClicked);
    if (bottomSheetRef.current) {
      bottomSheetRef.current.scrollTo(MarkerClicked ? 0 : MAX_TRANSLATE_Y);
    }
    setSelectedMarker(lieu);
  };
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
    if (mapRef.current) {
      mapRef.current.animateToRegion(initialRegion, 1000);
    }
  };

  const bottomSheetContent = selectedMarker && (
    <View style={styles.bottomSheetContent}>
      <Image
        source={selectedMarker.imageUrl}
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
      />

      <View className="m-2">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 3,
          }}
        >
          <Text className="text-large   text-dgry font-nunito-bold">
            {selectedMarker.title}
          </Text>
          <View style={styles.durationContainer}>
            <Ionicons name="timer" size={20} color="#555555" />
            <Text className="font-nunito-bold text-lgry ml-1">45min</Text>
          </View>
        </View>
        <Text className="text-xxl text-dgry mt-2 font-nunito-regular">
          {selectedMarker.discription}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#85C872" />
      </View>
    );
  }
  const tour = tours[0]; // Display the first tour for demonstration purposes
  const initialRegion = {
    latitude: userLocation ? userLocation.latitude : tour.lieux[0].latitude,
    longitude: userLocation ? userLocation.longitude : tour.lieux[0].longitude,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MapView
        initialRegion={initialRegion}
        style={StyleSheet.absoluteFill}
        ref={mapRef}
      >
        {userLocation && <Marker coordinate={userLocation} />}
        {tour.lieux.map((lieu) => (
          <Marker
            key={lieu.id}
            coordinate={{ latitude: lieu.latitude, longitude: lieu.longitude }}
            onPress={() => handleMarkerClick(lieu)}
          >
            <Image
              source={lieu.imageUrl}
              style={{ width: 40, height: 40, borderRadius: 45 }}
            />
          </Marker>
        ))}

        {userLocation && (
          <MapViewDirections
            origin={tour.lieux[0]}
            destination={{
              latitude: tour.lieux[tour.lieux.length - 1].latitude,
              longitude: tour.lieux[tour.lieux.length - 1].longitude,
            }}
            waypoints={tour.lieux.slice(1, -1).map((lieu) => ({
              latitude: lieu.latitude,
              longitude: lieu.longitude,
            }))}
            apikey={GOOGLE_API_KEY}
            strokeWidth={2}
            strokeColor="blue"
            optimizeWaypoints={true}
            resetOnChange={false}
          />
        )}
        <MapViewDirections
          origin={userLocation}
          destination={tour.lieux[0]}
          apikey={GOOGLE_API_KEY}
          strokeWidth={2}
          strokeColor="blue"
          optimizeWaypoints={true}
          resetOnChange={false}
        ></MapViewDirections>
      </MapView>
      <BottomSheet ref={bottomSheetRef}>{bottomSheetContent}</BottomSheet>

      <View style={styles.overlayContainer}>
        <View style={styles.overlay}>
          <Text className="text-large   text-black font-nunito-bold">
            {tourName}
          </Text>
          <View style={styles.row}>
            <View style={styles.durationContainer}>
              <Ionicons name="timer" size={20} color="#555555" />
              <Text className="text-large  ml-1 text-lgry font-nunito-bold">
                2h 30m
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleButtonClick();
          }}
        >
          <View style={styles.circle}>
            <Ionicons
              name="paper-plane"
              size={32}
              color={buttonClicked ? "#85C872" : "black"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContainer: {
    marginVertical: 20,
    position: "absolute",
    top: 30,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlay: {
    width: 289,
    height: 58,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    marginLeft: 15,
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  durationContainer: {
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MyTourScreen;
