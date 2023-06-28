import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Set your desired background color
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%", // Adjust the size of the image as per your preference
  },
});

export default SplashScreen;
