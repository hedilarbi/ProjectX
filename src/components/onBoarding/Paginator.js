import { StyleSheet, View } from "react-native";
import React from "react";

import { Colors } from "../../constants";

const Paginator = ({ data, currentIndex }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 32,
        marginBottom: 12,
      }}
    >
      {data.map((_, i) => {
        return (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: currentIndex === i ? "#85C872" : "white",
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 15,
    borderRadius: 20,
    borderColor: "#85C872",
    borderWidth: 1,
    marginHorizontal: 8,
    width: 15,
  },
});
