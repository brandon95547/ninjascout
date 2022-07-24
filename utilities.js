// import React from "react";
import * as Font from "expo-font";

export class Utilities {
  async loadFonts(callback) {
    await Font.loadAsync({
      // Load a font `Roboto` from a static resource
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Roboto-Bold": {
        uri: require("./assets/fonts/Roboto-Bold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Roboto-Light": {
        uri: require("./assets/fonts/Roboto-Light.ttf"),
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
