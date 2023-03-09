import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ProgressCircle from "react-native-progress-circle";

function Menter() {
  return (
    <>
      <View style={styles.mainSection}>
        <View style={styles.topSection}>
          <Text style={{ fontFamily: "sans-serif-condensed" }}>Mentor</Text>
          <Text style={{ fontFamily: "sans-serif-condensed" }}>Progress</Text>
        </View>
        <View style={styles.topSection}>
          <View style={styles.imageDiv}>
            <Image
              source={require("../../../../assets/Images/User.png")}
              style={styles.image}
            />
          </View>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 18, fontFamily: "sans-serif-condensed" }}>
              Ravi Kumar
            </Text>
            <Text
              style={{ fontFamily: "sans-serif-condensed", color: "#a9a9a9" }}
            >
              B-Teach Machnical
            </Text>
          </View>
          <View>
            <ProgressCircle
              percent={30}
              radius={25}
              borderWidth={4}
              color="green"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 15 }}>{"30%"}</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  imageDiv: {
    height: 50,
    width: 50,
    overflow: "hidden",
    borderRadius: 50,
  },
  mainSection: {
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 10,
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: "#eeeeee",
    padding: 5,
  },
});

export default Menter;
