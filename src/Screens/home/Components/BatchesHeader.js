import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CourseDetails from "../CourseDetails";
export default function BatchesHeader() {
  return (
    <View style={styles.topSection}>
      <Text style={styles.titleText}>New Courses</Text>
      <Text style={styles.subTitleText}>
        Buy Your Courses Now & Start Your Prepration
      </Text>
      <Image
        source={require("../../../../assets/Images/HeadImage.png")}
        style={styles.Image}
      />
      <TouchableOpacity onPress={() => navigation.navigate("CourseDetails")}>
        <View style={styles.buyBtnDiv}>
          <Text style={styles.buyBtn}>Enroll Know</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: "#fef8e3",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 600,
    fontFamily: "sans-serif-condensed",
  },
  subTitleText: {
    fontFamily: "sans-serif-condensed",
  },
  Image: {
    marginVertical: 10,
    height: 150,
    width: "100%",
  },
  buyBtnDiv: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f58084",
    borderRadius: 10,
  },
  buyBtn: {
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
  },
});
