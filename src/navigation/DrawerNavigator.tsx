import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { SideDrawer } from "../ui";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <SideDrawer />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
