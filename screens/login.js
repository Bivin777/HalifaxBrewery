import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   // Perform login logic here
  //   console.log("Logging in...");
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   // You can add your login logic here, such as making an API call to authenticate the user
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={() => navigation.navigate("home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#D0D7E3",
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#171E2C",
    borderRadius: 4,
  },
});

// export default Login;
