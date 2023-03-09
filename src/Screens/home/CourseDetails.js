import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Menter from "./Components/Menter";
import VideoCard from "./Components/VideoCard";

function CourseDetails({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [comHeight, setcomHeight] = useState(200);
  console.log(windowHeight - 600);

  const [read, setread] = useState(false);
  const readHandler = () => {
    if (read) {
      setread(false);
    } else {
      setread(true);
    }
  };
  onLayoutEvent = (event) => {
    setcomHeight(event.nativeEvent.layout.height);
  };
  return (
    <>
      <View style={{ paddingVertical: 10 }}>
        <View onLayout={onLayoutEvent}>
          <View style={Styles.topSection}>
            <Image
              source={require("../../../assets/Images/HeadImage.png")}
              style={Styles.image}
            />
            <Text style={Styles.heading}>UI/UX Design For Beginner</Text>
          </View>
          <View style={Styles.middleSection}>
            <Text style={{ fontFamily: "sans-serif-condensed" }}>
              About Course
            </Text>
            <Text style={{ fontFamily: "sans-serif-condensed" }}>
              Hope you guys enjoy and press "L" if you like it Any feedback or
              comment? Feel free to leave comments below.Have an amazing
              project? Send to our email
            </Text>
            <Text
              style={{
                display: read ? "flex" : "none",
                fontFamily: "sans-serif-condensed",
                marginTop: -2,
              }}
            >
              Hope you guys enjoy and press "L" if you like it Any feedback or
              comment? Feel free to leave comments below.Have an amazing
              project? Send to our email
            </Text>
            <TouchableOpacity onPress={readHandler}>
              <Text
                style={{
                  display: read ? "none" : "flex",
                  width: "30%",
                  backgroundColor: "blue",
                  padding: 5,
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "sans-serif-condensed",
                }}
              >
                Read More
              </Text>
              <Text
                style={{
                  display: read ? "flex" : "none",
                  width: "30%",
                  backgroundColor: "blue",
                  padding: 5,
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "sans-serif-condensed",
                }}
              >
                Read Less
              </Text>
            </TouchableOpacity>
          </View>
          <Menter />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 20,
              fontFamily: "sans-serif-condensed",
            }}
          >
            Course Contents
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: windowHeight - comHeight - 150 }}
          >
            <VideoCard navigation={navigation} />
            <VideoCard navigation={navigation} />
            <VideoCard navigation={navigation} />
          </ScrollView>
        </View>
        <TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                width: "80%",
                backgroundColor: "#000000",
                paddingVertical: 10,
                textAlign: "center",
                color: "#fff",
                fontSize: 24,
                fontFamily: "sans-serif-condensed",
              }}
            >
              Continue To Leaning
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
const Styles = StyleSheet.create({
  topSection: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
  heading: {
    fontFamily: "sans-serif-condensed",
    fontSize: 24,
    flexShrink: 1,
  },
  middleSection: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 1,
  },
});
export default CourseDetails;
