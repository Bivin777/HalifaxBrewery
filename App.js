import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from "./screens/home.js";
import Add from "./screens/add.js";
import Update from "./screens/update.js";
import Retrieve from "./screens/retrieve.js";
import Login from "./screens/login.js";
import SplashScreen from "./screens/SplashScreen.js";
// import Container from './screens/container.js';
// import Routing from './routes/routeMap.js';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data)
    // Replace this with your actual asynchronous task
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false to show the main app screen
    }, 2000); // Adjust the duration as per your preference
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Show the splash screen while isLoading is true
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="add" component={Add} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="update" component={Update} />
        <Stack.Screen name="retrieve" component={Retrieve} />
      </Stack.Navigator>
    </NavigationContainer>

    // <Container/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "##EDF1F1",
//     alignItems: "left",
//     justifyContent: "center",
//   },
// });
