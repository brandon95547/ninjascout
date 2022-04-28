// import React from "react";
import * as Font from "expo-font";

export async function loadFonts(callback) {
  await Font.loadAsync({
    // Load a font `Montserrat` from a static resource
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),

    // Any string can be used as the fontFamily name. Here we use an object to provide more control
    "Montserrat-SemiBold": {
      uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
      display: Font.FontDisplay.FALLBACK,
    },
  });
  callback();
}
