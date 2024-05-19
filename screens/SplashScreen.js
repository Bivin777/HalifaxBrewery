import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Booze Tracker</Text>
      <Text style={styles.version}>Version 1.0</Text>
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
    width: "80%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "gold",
    alignItems: "center",
    marginBottom: 20,
  },
  version: {
    fontSize: 14,
    color: "gold",
    marginBottom: 100,
  },
});

export default SplashScreen;
