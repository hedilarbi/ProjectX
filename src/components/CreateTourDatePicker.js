import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { dateInFormatMMDDYYYY, timeInFormatHHMM } from "../utils/dateFormaters";
import DateTimePickerModal from "./modals/DateTimePickerModal";
import { Entypo } from "@expo/vector-icons";

const CreateTourDatePicker = ({
  startDate,
  setStartDate,
  startTime,
  setStartTime,
}) => {
  const [dateTimePickerMode, setDateTimePickerMode] = useState("date");
  const [showDateTimePickerModel, setShowDateTimePickerModel] = useState(false);
  const showDateTimeModel = (currentMode) => {
    setShowDateTimePickerModel(true);
    setDateTimePickerMode(currentMode);
  };

  const showDatepicker = () => {
    showDateTimeModel("date");
  };

  const showTimepicker = () => {
    showDateTimeModel("time");
  };

  return (
    <View className="flex-row mt-2 bg-white p-3 rounded-sm  justify-between items-center ">
      <DateTimePickerModal
        setShowDateTimePickerModel={setShowDateTimePickerModel}
        showDateTimePickerModel={showDateTimePickerModel}
        dateTimePickerMode={dateTimePickerMode}
        setDate={setStartDate}
        date={startDate}
        time={startTime}
        setTime={setStartTime}
      />
      <TouchableOpacity className="flex-row  gap-2  " onPress={showDatepicker}>
        <View className="flex-row items-center">
          <Entypo name="calendar" size={24} color="black" />

          <Text className="font-roboto-medium text-base ml-3">
            {dateInFormatMMDDYYYY(startDate)}
          </Text>
        </View>
      </TouchableOpacity>
      <Text className="font-roboto-medium text-base ml-3 text-gray-400">A</Text>
      <TouchableOpacity
        className="flex-row  gap-2 w-1/2 "
        onPress={showTimepicker}
      >
        <View className="flex-row items-center">
          <Entypo name="clock" size={24} color="black" />

          <Text className="font-roboto-medium text-base ml-3">
            {timeInFormatHHMM(startTime)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTourDatePicker;
