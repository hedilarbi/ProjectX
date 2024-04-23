import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Platform, Animated } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_API_KEY } from "./Location"; // Assuming you have GOOGLE_API_KEY defined in Location file
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const [pickupCords] = useState({
    latitude: 30.7046,
    longitude: 76.7179,
  });
  const [droplocationCords] = useState({
    latitude: 30.7333,
    longitude: 76.7794,
  });
  const mapRef = useRef();

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: pickupCords.latitude,
          longitude: pickupCords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={StyleSheet.absoluteFill}
        ref={mapRef}
      >
        <Marker coordinate={pickupCords} />
        <Marker coordinate={droplocationCords} />
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
