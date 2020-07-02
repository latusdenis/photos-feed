import React, { createRef } from "react";
import { DrawerActions } from "@react-navigation/native";

export const navigationRef = createRef<any>();

const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};

const navigate = (name: string, params?: object) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

export const Navigator = {
  navigate,
  openDrawer,
  closeDrawer,
  goBack,
};
