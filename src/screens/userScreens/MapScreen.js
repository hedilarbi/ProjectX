import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import NavigateButton from "../../components/buttons/NavigateButton";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../../constants";

const MapScreen = () => {
  const inset = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation();
  const places = route.params.places;
  const waypoints = places.slice(1, -1).map((place) => place.coords);

  return (
    <View style={{ paddingTop: inset.top }} className="flex-1 ">
      <TouchableOpacity
        className="rounded-full bg-white p-2 absolute left-2 top-4 z-20"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          marginTop: inset.top,
        }}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome6 name="arrow-left-long" size={22} color={Colors.PR} />
      </TouchableOpacity>
      <MapView
        initialRegion={{
          latitude: places[0].coords.latitude,
          longitude: places[0].coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      >
        {places.map((place, index) => (
          <Marker key={index} coordinate={place.coords} title={place.address} />
        ))}
        <MapViewDirections
          origin={places[0].coords}
          destination={places[places.length - 1].coords}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
          waypoints={waypoints}
          // optimizeWaypoints={true}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
