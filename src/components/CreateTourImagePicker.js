import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
const CreateTourImagePicker = ({ setImage, image }) => {
  const handleImageSelection = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <TouchableOpacity
      className="bg-green-500  rounded-sm mt-2 justify-center h-36 "
      onPress={handleImageSelection}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          className="rounded-sm"
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      ) : (
        <Text className="font-roboto-bold text-base text-center text-white">
          Ajouter une image
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CreateTourImagePicker;
