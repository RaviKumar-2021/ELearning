import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import BatchesHeader from "./Components/BatchesHeader";
import BatchesList from "./Components/BatchesList";

export default function Batches({ navigation }) {
  return (
    <ImageBackground
      // source={require("../../../assets/Images/logBg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <BatchesHeader navigation={navigation} />
      <Text
        style={{
          fontFamily: "sans-serif-condensed",
          color: "#000000",
          fontSize: 18,
          marginHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        Courses
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BatchesList />
        <BatchesList />
        <BatchesList />
        <BatchesList />
      </ScrollView>
    </ImageBackground>
  );
}
