import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PhotosFeed } from "./PhotosFeed";
import { TouchableOpacity, Text } from "react-native";
import { Navigator } from "../../services";
import { Icon } from "../../ui";

const PhotosStack = createStackNavigator();

const PhotosFeedNavigator = () => {
  return (
    <PhotosStack.Navigator>
      <PhotosStack.Screen
        name="PhotosFeed"
        component={PhotosFeed}
        options={{
          headerTitle: "Photos Feed",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => Navigator.openDrawer()}
              style={{ marginLeft: 10 }}
            >
              <Icon name="ios-menu" color="#272727" />
            </TouchableOpacity>
          ),
        }}
      />
    </PhotosStack.Navigator>
  );
};

export { PhotosFeedNavigator };
