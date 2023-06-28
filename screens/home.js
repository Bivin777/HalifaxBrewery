import { BottomSheet } from "@rneui/base";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default Home = ({ navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
        <Image
          source={require("./hamburger_icon.png")}
          style={styles.hamburgerIcon}
        />
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menuContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("add")}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Add Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("update")}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Update Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("retrieve")}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>View Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.welcomeText}>Welcome to your App, Justin!</Text>

      <Text style={styles.versionText}>Version 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  hamburgerContainer: {
    position: "absolute",
    top: 26,
    left: 6,
    zIndex: 1,
  },
  hamburgerIcon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
  menuContainer: {
    position: "absolute",
    top: 70,
    left: 45,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 8,
    elevation: 2,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  versionText: {
    fontSize: 10,
    position: "absolute",
    bottom: 20,
  },
});
