import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import BatchesHeader from "./Components/BatchesHeader";
import BatchesList from "./Components/BatchesList";
import course from "../../../assets/Json/course.json";

export default function Batches({ navigation }) {
  const coursrData = course.course;

  console.log(coursrData);
  return (
    <ImageBackground
      source={require("../../../assets/Images/3.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <BatchesHeader navigation={navigation} course={course} />
      <Text
        style={{
          fontFamily: "sans-serif-condensed",
          color: "#fff",
          fontSize: 18,
          marginHorizontal: 20,
          paddingVertical: 5,
          borderBottomWidth: 1,
          margin: 10,
          borderColor: "#ffb3ff",
        }}
      >
        Courses
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {coursrData.map((e, i) => {
          return (
            <BatchesList
              navigation={navigation}
              type={e.type}
              title={e.title}
              price={e.price}
              id={e.id}
              key={i}
            />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}
