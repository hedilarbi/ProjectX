import { View, Text, Modal, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const DateTimePickerModal = ({
  setShowDateTimePickerModel,
  showDateTimePickerModel,
  dateTimePickerMode,
  setDate,
  date,
  time,
  setTime,
}) => {
  const inset = useSafeAreaInsets();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    if (dateTimePickerMode === "date") {
      setDate(currentDate);
    } else {
      setTime(currentDate);
    }
    setShowDateTimePickerModel(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showDateTimePickerModel}
      onRequestClose={() => false}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: Dimensions.get("window").height * 0.2,
            paddingBottom: inset.bottom,
          }}
          className="bg-white pt-2 px-4"
        >
          <View className="bg-white rounded-t-2xl flex-1 ">
            <View className="  flex-row items-center  justify-end ">
              <TouchableOpacity
                onPress={() => setShowDateTimePickerModel(false)}
              >
                <AntDesign name="close" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-1 justify-center items-center">
              <DateTimePicker
                testID="dateTimePicker"
                value={showDateTimePickerModel === "date" ? date : time}
                mode={dateTimePickerMode}
                is24Hour={true}
                onChange={onChange}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DateTimePickerModal;
