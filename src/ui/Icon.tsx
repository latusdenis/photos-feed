import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Icon = (props: { name: string; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

export { Icon };
