import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserLocation from "../../components/UserLocation";
import MyAgenciesList from "../../components/homeAgenciesList/MyAgenciesList";
import { useDispatch, useSelector } from "react-redux";
import getLocation from "../../utils/getLocation";
import {
  selectUserLocation,
  setUserLocation,
} from "../../redux/slices/userSlice";

import HomeLoading from "../../components/HomeLoading";
import NearByAgenciesList from "../../components/homeNearByAgencies/NearByAgenciesList";
import NearByToursList from "../../components/homeNearByTours/NearByToursList";
import SuggestionsList from "../../components/homeSuggestionsList/SuggestionsList";

const HomeScreen = () => {
  const inset = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { address, coords } = useSelector(selectUserLocation);

  const getUserLocation = async () => {
    setIsLoading(true);
    const { error, address, coords } = await getLocation();
    if (error) {
      console.error(error);
      return;
    }
    dispatch(setUserLocation({ address, coords }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (!address && !coords) {
      getUserLocation();
    }
  }, []);

  if (isLoading) return <HomeLoading />;

  return (
    <View className="flex-1 bg-white " style={{ paddingTop: inset.top }}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <UserLocation address={address} />
        <MyAgenciesList />
        <SuggestionsList />
        <NearByToursList />
        <NearByAgenciesList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
