import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const AgencyScreen = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const agency = {
    name: "Agence de voyage",
    address: "12 rue des voyageurs",
    city: "Paris",
    country: "France",
    phoneNumber: "0123456789",
    email: "agence1@gmail.com",
    image:
      "https://www.annuaire-publicitaire.com/wp-content/uploads/2022/12/fly-away-agence-voyage-ain-zaghouan-el-aouina.jpg",
    review: {
      mark: 4.5,
      number: 20,
    },
    tours: [
      {
        _id: 1,
        name: "Tour 1",
        description: "Description 1",
        price: 100,
        duration: "2 jours",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8JQ7zxwLF4drUpLeYn98SZCAj44y0lmhCYPmYdnfFMH-n1aw9vBVwULWEJGC451D268t9OOMOuQMrhX5n0AYBI6GE8r3_RgzTwdCxQytqb8Cq_Be04fK8VeZiJBNHaV1IWwCHOFQb77yrzZ5ynFRxcrz8tmIgRP8pplCbQFJYcM-nVCY5goNSrw2v/w680/school-tour-guidelines.png",
      },
      {
        _id: 2,
        name: "Tour 2",
        description: "Description 2",
        price: 200,
        duration: "3 jours",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8JQ7zxwLF4drUpLeYn98SZCAj44y0lmhCYPmYdnfFMH-n1aw9vBVwULWEJGC451D268t9OOMOuQMrhX5n0AYBI6GE8r3_RgzTwdCxQytqb8Cq_Be04fK8VeZiJBNHaV1IWwCHOFQb77yrzZ5ynFRxcrz8tmIgRP8pplCbQFJYcM-nVCY5goNSrw2v/w680/school-tour-guidelines.png",
      },
      {
        _id: 3,
        name: "Tour 3",
        description: "Description 3",
        price: 300,
        duration: "4 jours",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8JQ7zxwLF4drUpLeYn98SZCAj44y0lmhCYPmYdnfFMH-n1aw9vBVwULWEJGC451D268t9OOMOuQMrhX5n0AYBI6GE8r3_RgzTwdCxQytqb8Cq_Be04fK8VeZiJBNHaV1IWwCHOFQb77yrzZ5ynFRxcrz8tmIgRP8pplCbQFJYcM-nVCY5goNSrw2v/w680/school-tour-guidelines.png",
      },
    ],
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}
    >
      <ScrollView
        className="flex-1 bg-white "
        contentContainerStyle={{ paddingBottom: 24 }}
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
          source={{ uri: agency.image }}
          style={{ width: "100%", height: 250, resizeMode: "cover" }}
        />
        <View className="mt-4 px-3 ">
          <View className=" space-y-3">
            <Text className="font-nunito-bold text-dgry text-3xl">
              {agency.name}
            </Text>
            <Text className="font-nunito-medium text-lgry text-base">
              {agency.address}, {agency.city}, {agency.country}
            </Text>

            <Text className="font-nunito-medium text-lgry text-base">
              <FontAwesome name="phone" size={16} color={Colors.DGRY} />
              {"   "}
              {agency.phoneNumber}
            </Text>
            <Text className="font-nunito-medium text-lgry text-base">
              <FontAwesome name="envelope" size={16} color={Colors.DGRY} />
              {"   "}
              {agency.email}
            </Text>
            <View className="flex-row items-center ">
              <View className="flex-row items-center">
                <FontAwesome name="star" size={16} color={Colors.DGRY} />
                <Text className="font-nunito-bold text-sm text-lgry ml-2">
                  {agency.review.mark}
                </Text>
              </View>
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="font-nunito-bold text-sm text-lgry">
                {agency.review.number} avis
              </Text>
            </View>
          </View>
          <View className="w-full h-0.5 bg-gray-300 mt-4" />
          <View className="mt-4">
            <Text className="font-nunito-bold text-dgry text-2xl">Tours</Text>
            <View className="mt-4 space-y-4">
              {agency.tours.map((tour) => (
                <TouchableOpacity
                  key={tour._id}
                  className="flex-row space-x-4 bg-white rounded-md"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                  onPress={() => navigation.navigate("Tour", { id: tour._id })}
                >
                  <Image
                    source={{ uri: tour.image }}
                    style={{
                      width: 150,
                      height: 100,
                      resizeMode: "cover",
                      borderBottomLeftRadius: 6,
                      borderTopLeftRadius: 6,
                    }}
                  />
                  <View className="flex-1 justify-between pr-3 py-2">
                    <View className="flex-row justify-between">
                      <Text className="font-nunito-bold text-lgry text-base">
                        {tour.name}
                      </Text>

                      <Text className="font-nunito-bold text-lgry text-sm">
                        {tour.price} €
                      </Text>
                    </View>
                    <Text
                      className="font-nunito-medium text-lgry text-sm"
                      numberOfLines={1}
                    >
                      {tour.duration}
                    </Text>
                    <Text className="font-nunito-medium text-lgry text-sm">
                      {tour.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AgencyScreen;
