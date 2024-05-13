import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FontAwesome,
  Entypo,
  FontAwesome6,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import NavigateButton from "../../components/buttons/NavigateButton";
import PlaceDetailsModal from "../../components/modals/PlaceDetailsModal";

const TourScreen = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const [place, setPlace] = useState({}); // [1
  const [showPlaceDetailsModal, setShowPlaceDetailsModal] = useState(false);

  const tour = {
    _id: 1,
    name: "Tour 1",
    description: "Description 1",
    price: 100,
    duration: "2 jours",
    review: {
      mark: 4.5,
      number: 20,
    },
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8JQ7zxwLF4drUpLeYn98SZCAj44y0lmhCYPmYdnfFMH-n1aw9vBVwULWEJGC451D268t9OOMOuQMrhX5n0AYBI6GE8r3_RgzTwdCxQytqb8Cq_Be04fK8VeZiJBNHaV1IWwCHOFQb77yrzZ5ynFRxcrz8tmIgRP8pplCbQFJYcM-nVCY5goNSrw2v/w680/school-tour-guidelines.png",
    places: [
      {
        name: "Place 1",
        description:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
        image:
          "https://www.annuaire-publicitaire.com/wp-content/uploads/2022/12/fly-away-agence-voyage-ain-zaghouan-el-aouina.jpg",
        address: "12 rue des voyageurs",
        duration: "1h 50min",
        coords: {
          latitude: 36.782449,
          longitude: 10.190564,
        },
      },
      {
        name: "Place 2",
        description: "Description 2",
        image:
          "https://www.annuaire-publicitaire.com/wp-content/uploads/2022/12/fly-away-agence-voyage-ain-zaghouan-el-aouina.jpg",
        coords: {
          latitude: 36.76938,
          longitude: 10.157709,
        },
      },

      {
        name: "Place 3",
        description: "Description 3",
        image:
          "https://www.annuaire-publicitaire.com/wp-content/uploads/2022/12/fly-away-agence-voyage-ain-zaghouan-el-aouina.jpg",
        coords: {
          latitude: 36.877593,
          longitude: 10.183654,
        },
      },
    ],
  };

  const handleShowPlaceDetails = (place) => {
    setPlace(place);
    setShowPlaceDetailsModal(true);
  };

  const handleNavigateToMap = () => {
    navigation.navigate("MapScreen", { places: tour.places });
  };

  return (
    <View
      className="flex-1 bg-white"
      style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
    >
      <PlaceDetailsModal
        showPlaceDetailsModal={showPlaceDetailsModal}
        place={place}
        setShowPlaceDetailsModal={setShowPlaceDetailsModal}
      />
      <View
        className="absolute bottom-0 left-0 z-10 bg-white w-full py-4 border-t-2 border-gray-300 border-b-2 flex-row justify-center "
        style={{ marginBottom: inset.bottom }}
      >
        <NavigateButton text="S'inscrire" style={{ width: "70%" }} />
      </View>
      <ScrollView
        className="flex-1 bg-white "
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          className="rounded-full bg-white p-2 absolute left-2 top-4 z-20"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome6 name="arrow-left-long" size={22} color={Colors.PR} />
        </TouchableOpacity>
        <Image
          source={{ uri: tour.image }}
          style={{ width: "100%", height: 250, resizeMode: "cover" }}
        />
        <View className="mt-4 px-3 ">
          <View className=" space-y-3">
            <Text className="font-nunito-bold text-dgry text-3xl">
              {tour.name}
            </Text>
            <Text className="font-nunito-medium text-lgry text-base">
              {tour.description}
            </Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-2">
                <FontAwesome5
                  name="money-bill-wave"
                  size={20}
                  color={Colors.LGRY}
                />
                <Text className="font-nunito-medium text-lgry text-base">
                  {tour.price} €
                </Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <MaterialIcons name="timer" size={20} color={Colors.LGRY} />
                <Text className="font-nunito-medium text-lgry text-base">
                  {tour.duration}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center ">
              <View className="flex-row items-center">
                <FontAwesome name="star" size={16} color={Colors.DGRY} />
                <Text className="font-nunito-bold text-sm text-lgry ml-2">
                  {tour.review.mark}
                </Text>
              </View>
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="font-nunito-bold text-sm text-lgry">
                {tour.review.number} avis
              </Text>
            </View>
            <NavigateButton
              text="Voir sur la map"
              style={{ marginTop: 24 }}
              action={handleNavigateToMap}
            />
          </View>
          <View className="w-full h-0.5 bg-gray-300 mt-4" />
          <View className="mt-4">
            <Text className="font-nunito-bold text-dgry text-2xl">Lieux</Text>
            <View className="mt-4 space-y-4">
              {tour.places.map((place) => (
                <TouchableOpacity
                  key={place.name}
                  className="flex-row space-x-4 bg-white rounded-md"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                  onPress={() => handleShowPlaceDetails(place)}
                >
                  <Image
                    source={{ uri: place.image }}
                    style={{
                      width: "100%",
                      height: 100,
                      resizeMode: "cover",
                      borderRadius: 6,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TourScreen;
