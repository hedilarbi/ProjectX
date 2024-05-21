import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import tours from "../components/constants/Tours";
import CustomMarker from "./CustomCallout";
import BottomSheet from "./BottomSheet";
import polyline from "@mapbox/polyline";

const GOOGLE_API_KEY = "AIzaSyC2t8GvZFa6Ld6fbKM6_m2n3M0JoOmI03w";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      getLocation();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getLocation();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userLocation && destinationLocation) {
      fetchDirections(userLocation, destinationLocation);
    }
  }, [userLocation, destinationLocation]);

  useEffect(() => {
    console.log("userLocation:", userLocation);
  }, [userLocation]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    // Update userLocation based on the previous location and increment
    setUserLocation((prevUserLocation) => ({
      latitude: prevUserLocation
        ? prevUserLocation.latitude + 0.001
        : location.coords.latitude + 0.001,
      longitude: prevUserLocation
        ? prevUserLocation.longitude + 0.001
        : location.coords.longitude + 0.001,
    }));

    // Set initial destination location
    setDestinationLocation({
      latitude: location.coords.latitude + 0.11, // Sample latitude offset
      longitude: location.coords.longitude + 0.01, // Sample longitude offset
    });

    // Fetch directions when user location and destination are available
    if (userLocation && destinationLocation) {
      fetchDirections(userLocation, destinationLocation);
    }
  };

  const fetchDirections = async (origin, destination) => {
    console.log("Fetching directions...");
    console.log("Origin:", origin);
    console.log("Destination:", destination);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      console.log("Directions data:", data);
      if (data.routes.length > 0) {
        const points = polyline.decode(data.routes[0].overview_polyline.points);
        const routeCoords = points.map((point) => ({
          latitude: point[0],
          longitude: point[1],
        }));
        setRouteCoordinates(routeCoords);
        console.log("Route coordinates:", routeCoords);
      } else {
        console.log("No routes found");
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 37.4219983, // Sample initial latitude
          longitude: -122.084, // Sample initial longitude
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        style={StyleSheet.absoluteFill}
        showsUserLocation={true}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="You are here"
            description="Your current location"
          />
        )}
        {destinationLocation && (
          <Marker
            coordinate={{
              latitude: destinationLocation.latitude,
              longitude: destinationLocation.longitude,
            }}
            title="Destination"
            description="Destination location"
          />
        )}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#FF0000"
            strokeWidth={3}
          />
        )}
      </MapView>
    </GestureHandlerRootView>
  );
};

export default Map;

/* 
const GOOGLE_API_KEY = "AIzaSyC2t8GvZFa6Ld6fbKM6_m2n3M0JoOmI03w";

<Image
              source={place.image}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <MapViewDirections
          origin={currentTour.lieux[0]} // Starting point of the tour
          destination={currentTour.lieux[currentTour.lieux.length - 1]} // Ending point of the tour
          waypoints={currentTour.lieux.slice(1, -1)} // Waypoints of the tour (excluding starting and ending points)
          apikey={GOOGLE_API_KEY} // Your Google API Key
          strokeWidth={3}
          resetOnChange={true}
          strokeColor="blue"
          optimizeWaypoints={true}
        />
        
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import tours from "../components/constants/Tours";
import CustomMarker from "./CustomCallout";
import BottomSheet from "./BottomSheet";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      (position) => {
        console.log("Received location:", position.coords);
        // Update userLocation state with the new location
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }
    );

    // Set initial destination location
    setDestinationLocation({
      latitude: location.coords.latitude + 0.11, // Sample latitude offset
      longitude: location.coords.longitude + 0.01, // Sample longitude offset
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 37.4219983, // Sample initial latitude
          longitude: -122.084, // Sample initial longitude
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        style={StyleSheet.absoluteFill}
        showsUserLocation={true}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="You are here"
            description="Your current location"
          />
        )}
        {destinationLocation && (
          <Marker
            coordinate={{
              latitude: destinationLocation.latitude,
              longitude: destinationLocation.longitude,
            }}
            title="Destination"
            description="Destination location"
          />
        )}
        {userLocation && destinationLocation && (
          <MapViewDirections
            origin={userLocation}
            destination={destinationLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        )}
      </MapView>
    </GestureHandlerRootView>
  );
};

export default Map;
        
 */
{
  /*  <MapViewDirections
          origin={currentTour.lieux[0]} // Starting point of the tour
          destination={currentTour.lieux[currentTour.lieux.length - 1]} // Ending point of the tour
          waypoints={currentTour.lieux.slice(1, -1)} // Waypoints of the tour (excluding starting and ending points)
          apikey={GOOGLE_API_KEY} // Your Google API Key
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        
        
        
        
        
        */
}
