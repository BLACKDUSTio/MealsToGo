import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./scr/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
