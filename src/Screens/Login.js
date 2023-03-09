import { Button } from "@rneui/themed";
import HomeMenuBar from "../Navigations/HomeMenuBar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  const Email = "Ravi@gmail.com";
  const Pass = "Ravi@123";

  const loginHandler = () => {
    if (email == Email && Pass == password) {
      navigation.navigate("HomeMenuBar");
    } else {
      console.log("Same Thing Is Wrong...");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/Images/2.png")}
      style={styles.bacStyle}
    >
      <View style={{ paddingHorizontal: 40, marginTop: 110 }}>
        <Text style={styles.headText}>Welcome,</Text>
        <Text style={styles.subheadText}>Log in to continue!</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            onChange={(e) => setemail(e.nativeEvent.text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#fff"
            onChange={(e) => setpassword(e.nativeEvent.text)}
          />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgetPassword");
            }}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loginHandler}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
            fontFamily: "sans-serif-condensed",
          }}
        >
          <Text style={styles.lastText}>I'm already a member , </Text>
          <Text
            style={{
              fontSize: 20,
              color: "darkblue",
              fontWeight: "bold",
              fontFamily: "sans-serif-condensed",
            }}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            Signup
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
  },
  subheadText: {
    fontSize: 22,
    paddingVertical: 10,
    paddingRight: 60,
    lineHeight: 25,
    color: "#ff8080",
    fontStyle: "italic",
    fontFamily: "sans-serif-condensed",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#fff",
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
  },
  lastText: {
    color: "yellow",
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
  },
  forgotText: {
    marginTop: -10,
    marginBottom: 10,
    position: "relative",
    right: -60,
    fontStyle: "italic",
    color: "#ffbbbb",
    fontFamily: "sans-serif-condensed",
  },
});
