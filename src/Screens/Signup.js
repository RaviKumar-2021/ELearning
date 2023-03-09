import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

export default function Signup({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/Images/2.png")}
      style={styles.bacStyle}
    >
      <View style={{ paddingHorizontal: 40, marginTop: 110 }}>
        <Text style={styles.headText}>Create Account,</Text>
        <Text style={styles.subheadText}>Sign up to get started!</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
          }}
        >
          <Text style={styles.lastText}>I have not account , </Text>
          <Text
            style={{
              fontSize: 20,
              color: "darkblue",
              fontWeight: "bold",
              fontFamily: "sans-serif-condensed",
            }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Login
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bacStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  headText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: 800,
    fontFamily: "sans-serif-condensed",
    color: "#fff",
  },
  subheadText: {
    fontSize: 22,
    paddingVertical: 10,
    paddingRight: 60,
    fontFamily: "sans-serif-condensed",
    lineHeight: 25,
    color: "red",
    fontStyle: "italic",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#fff",
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderRadius: 5,
    width: "100%",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    paddingTop: 10,
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: "sans-serif-condensed",
  },
  lastText: {
    fontFamily: "sans-serif-condensed",
    color: "yellow",
    fontSize: 20,
  },
});
