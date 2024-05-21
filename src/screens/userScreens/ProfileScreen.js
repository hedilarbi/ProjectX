import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const inset = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white " style={{ paddingTop: inset.top }}>
      <View style={styles.card}>
        <View style={styles.userContainer}>
          <View style={styles.blueRectangle}>
            <Text style={styles.letterH}>H</Text>
          </View>
          {/* User name and email */}
          <View style={styles.userInfo}>
            <Text className=" text-large font-nunito-bold">
              Hedi.larbi@gmail.com
            </Text>
            <Text className=" text-large text-lgry font-nunito-bold">
              Hedi Larbi
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text className="text-xlarge  text-dgry font-nunito-bold">
            Modifier Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.card, { flex: 3 }]}>
        <View style={styles.cardContent}>
          <View>
            <View
              className="flex-row  items-center mt-5 "
              style={styles.listItem}
            >
              <Ionicons name="airplane" size={30} color="black" />
              <Text className="ml-3 font-nunito-medium text-large">
                Mes agences
              </Text>
            </View>
            <View className="flex-row items-center mt-5 ">
              <Ionicons name="map" size={30} color="black" />
              <Text className="ml-3 font-nunito-medium text-large">
                Mes tours
              </Text>
            </View>
          </View>
          <View>
            <View className=" flex-row items-center mt-5 ">
              <Ionicons name="log-out" size={30} color="black" />
              <Text className=" ml-3 font-nunito-medium text-large">
                Deconnexion
              </Text>
            </View>
            <View className="flex-row items-center mt-5  ">
              <Ionicons name="trash" size={30} color="black" />
              <Text className=" ml-3 font-nunito-medium text-large">
                Supprimer compte
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  cardContent: {
    marginVertical: 25,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  userContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  blueRectangle: {
    width: 65,
    height: 65,
    backgroundColor: "#285A84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  letterH: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  userInfo: {
    marginLeft: 10,
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
});
