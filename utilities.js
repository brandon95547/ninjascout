// import React from "react";
import * as Font from "expo-font";

export class Utilities {
  async loadFonts(callback) {
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
  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
}
