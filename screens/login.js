import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const apiUrl = "https://atlanticbreweries.herokuapp.com/login"; // Replace with your API endpoint URL

    // Request payload with email and password
    const payload = {
      email,
      password,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          navigation.navigate("home");
          console.log("Login successful");
          // Perform navigation to the next screen or any desired action
        } else {
          // Handle error response
          throw new Error("Login failed");
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.log("Error:", error.message);
        Alert.alert("Login failed :(", "Incorrect username or password ");
        // Display an error message or take appropriate action
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./background.jpg")} // Replace with your background image source
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={styles.showPasswordButton}
            >
              <Text style={styles.showPasswordButtonText}>
                {showPassword ? "Hide" : "Show"} Password
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: -20,
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    color: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    color: "white",
  },
  showPasswordButton: {
    paddingHorizontal: 8,
  },
  showPasswordButtonText: {
    color: "white",
    textDecorationLine: "underline",
  },
  loginButton: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 16,
  },
  loginButtonText: {
    color: "blue",
    fontSize: 14,
  },
});
