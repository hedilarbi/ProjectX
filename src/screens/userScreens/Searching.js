import { View, Text, Image } from "react-native";
import React from "react";
import searching from "../../../assets/images/undraw_Searching_re_3ra9.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavigateButton from "../../components/buttons/NavigateButton";
const Searching = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image style={{ height: 282, width: 168 }} source={searching} />
      <Text className="text-large   text-dgry font-nunito-bold">
        Vous n’etes pas inscrit a un tour
      </Text>
      <NavigateButton
        text={"Explorer"}
        style={{ margin: 20, width: 282, height: 51 }}
        action={() => {
          navigation.navigate("Explore");
        }}
      />
    </View>
  );
};

export default Searching;
