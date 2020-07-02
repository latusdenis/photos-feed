import * as React from "react";
import { Colors } from "../../src/constants/Colors";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PhotosFeedNavigator } from "../features/PhotosFeed/PhotosFeedNavigator";
import { SettingsNavigator } from "../features/Settings/SettingsNavigator";
import { Icon } from "../ui";
import { Routes } from "./Routes";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="BottomNavigation"
      tabBarOptions={{ activeTintColor: Colors.light.tabIconSelected }}
    >
      <BottomTab.Screen
        name={Routes.PhotosFeed}
        component={PhotosFeedNavigator}
        options={{
          title: "Photos",
          tabBarIcon: ({ color }) => <Icon name="ios-apps" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Routes.Settings}
        component={SettingsNavigator}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Icon name="ios-cog" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export { BottomTabNavigator };
