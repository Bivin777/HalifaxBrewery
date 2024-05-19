import { BottomSheet } from "@rneui/base";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default Home = ({ navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Render content based on the selected tab */}
        {selectedTab === "Home" && (
          <Text>The last record update was done on: </Text>
        )}
        {selectedTab === "Add" && <Text>Add Screen Content</Text>}
        {selectedTab === "Settings" && <Text>Settings Screen Content</Text>}
      </View>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Home" && styles.selectedTab]}
          onPress={() => navigation.navigate("home")}
        >
          <Icon name="home-outline" size={24} color="black" />
          {/* <Text style={styles.tabText}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "retrieve" && styles.selectedTab]}
          onPress={() => navigation.navigate("retrieve")}
        >
          <Icon name="search-outline" size={24} color="black" />
          {/* <Text style={styles.tabText}>View</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Update" && styles.selectedTab]}
          onPress={() => navigation.navigate("update")}
        >
          <Icon name="refresh-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Add" && styles.selectedTab]}
          onPress={() => navigation.navigate("add")}
        >
          <Icon name="add-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Logout" && styles.selectedTab]}
          onPress={() => navigation.navigate("login")}
        >
          <Icon name="exit-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavBar: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: "blue",
  },
  tabText: {
    fontSize: 16,
  },
});
