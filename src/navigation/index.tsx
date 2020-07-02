import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { DetailedPhoto } from "../features";
import { navigationRef } from "../services/Navigator/Navigator";
import { Routes } from "./Routes";
import { DrawerNavigator } from "./DrawerNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, cardOverlayEnabled: true }}
      mode="modal"
    >
      <Stack.Screen name="Root" component={DrawerNavigator} />
      <Stack.Screen
        name={Routes.DetailedPhoto}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          headerShown: false,
        }}
        component={DetailedPhoto}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};
