import { StatusBar } from "expo-status-bar";
// import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from "react-native";
export default Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome, Justin!</Text>
        <StatusBar style="auto" />
      </View>
      <Button
        title="Add records"
        onPress={() => navigation.navigate("add")}
        // onPress={() => navigation.navigate('add', { name: 'Danny' })}
      />
      <Button
        title="View records"
        onPress={() => navigation.navigate("retrieve")}
      />
      <Button
        title="Update records"
        onPress={() => navigation.navigate("update")}
      />
      <Button title="Logout" onPress={() => navigation.navigate("login")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#05132E",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#E8EEF9",
  },
});
