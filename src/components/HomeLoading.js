import { Dimensions, ScrollView, View } from "react-native";
import React from "react";
import Skeleton from "./Skeleton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeLoading = () => {
  const inset = useSafeAreaInsets();
  const screenWidth = Dimensions.get("window").width - 20;
  return (
    <View
      className="flex-1 bg-bg px-2 py-4 items-center"
      style={{ paddingTop: inset.top }}
    >
      <ScrollView className="flex-1">
        <Skeleton width={screenWidth} height={60} style={{ borderRadius: 5 }} />
        <ScrollView
          className=" mt-4"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Skeleton
            width={250}
            height={180}
            style={{ borderRadius: 5, marginTop: 12 }}
          />
          <Skeleton
            width={250}
            height={180}
            style={{ borderRadius: 5, marginTop: 12, marginLeft: 10 }}
          />
        </ScrollView>
        <ScrollView
          className=" mt-4"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Skeleton
            width={200}
            height={180}
            style={{ borderRadius: 5, marginTop: 12 }}
          />
          <Skeleton
            width={200}
            height={180}
            style={{ borderRadius: 5, marginTop: 12, marginLeft: 10 }}
          />
          <Skeleton
            width={200}
            height={180}
            style={{ borderRadius: 5, marginTop: 12, marginLeft: 10 }}
          />
          <Skeleton
            width={200}
            height={180}
            style={{ borderRadius: 5, marginTop: 12, marginLeft: 10 }}
          />
        </ScrollView>
        <ScrollView
          className=" mt-4"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Skeleton
            width={250}
            height={180}
            style={{ borderRadius: 5, marginTop: 12 }}
          />
          <Skeleton
            width={250}
            height={180}
            style={{ borderRadius: 5, marginTop: 12, marginLeft: 10 }}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeLoading;
