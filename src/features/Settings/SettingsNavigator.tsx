import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from "./Settings";

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
};

export { SettingsNavigator };
