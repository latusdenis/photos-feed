import React, { useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { Image } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, PhotosState } from "./photosFeedSlice";
import { Navigator } from "../../services";
import { Routes } from "../../navigation/Routes";

const PhotosFeed = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: PhotosState) => state.photos);

  const { data, isLoading, error } = photos;

  useEffect(() => {
    dispatch(getPhotos(1));
  }, []);

  const onLoadMore = () => {
    if (photos.data) {
      const currentPage = photos.data.length / 20;

      dispatch(getPhotos(currentPage + 1));
    }
  };

  return (
    <View>
      {!!error && <Text>{error}</Text>}

      <FlatList
        data={data}
        keyExtractor={(photo) => photo.id.toString()}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
        numColumns={2}
        ListEmptyComponent={() => (
          <ActivityIndicator color="blue" animating={isLoading} />
        )}
        renderItem={({ item: photo }) => {
          return (
            <TouchableOpacity
              style={styles.touchablePhoto}
              onPress={() =>
                Navigator.navigate(Routes.DetailedPhoto, { photo })
              }
            >
              <Image source={{ uri: photo.url }} style={styles.photo} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: 125,
  },
  touchablePhoto: {
    flex: 1,
    margin: 2,
  },
});

export { PhotosFeed };
