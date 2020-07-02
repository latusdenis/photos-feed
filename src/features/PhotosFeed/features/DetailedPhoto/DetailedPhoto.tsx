import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { PhotosData } from "../../photosFeedSlice";

type RootStackParamList = {
  DetailedPhoto: { photo: PhotosData };
};

type DetailedPhotoRouteProp = RouteProp<RootStackParamList, "DetailedPhoto">;

const DetailedPhoto = () => {
  const route = useRoute<DetailedPhotoRouteProp>();

  const photo = route.params?.photo;

  return (
    <View>
      <Text style={styles.heading}>{photo.title}</Text>
      <Image
        style={styles.detailedPhoto}
        source={{
          uri: photo.url,
        }}
      />
    </View>
  );
};

export { DetailedPhoto };

const styles = StyleSheet.create({
  heading: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  detailedPhoto: {
    width: "100%",
    height: 400,
  },
});
