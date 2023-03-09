import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CourseList from "./Components/CourseList";
import NoticeCard from "./Components/NoticeCard";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/Images/logBg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#d1a0a7",
            }}
          >
            <Image
              source={require("../../../assets/Images/Onboarding2.png")}
              style={{ height: 15, width: 20 }}
            />
          </View>
        </View> */}

        <ScrollView
          style={{
            marginVertical: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={Styles.welcomeText}>Welcome back Sir</Text>

          <View style={Styles.inputDiv}>
            <TextInput
              placeholder="Search for new knowledge!"
              placeholderTextColor="#345c74"
              style={Styles.inputLine}
            />
            <Image
              source={require("../../../assets/Images/SearchIcons.png")}
              style={{ height: 14, width: 14 }}
            />
          </View>
          <View style={Styles.topDiv}>
            <View>
              <Text style={Styles.topDivText}>Start learning new Staff</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Courses")}
                style={Styles.topDivButton}
              >
                <Text style={Styles.topDivButtonText}>Classes</Text>
                <Image
                  source={require("../../../assets/Images/RightArrowFull.png")}
                  style={{
                    marginLeft: 20,
                    width: 20,
                    height: 20,
                    color: "#fff",
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../../assets/Images/HomeImage.png")}
              style={{
                marginTop: 25,
                marginLeft: -90,
                zIndex: 5,
                position: "relative",
                height: 150,
                width: 160,
              }}
            />
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text style={Styles.freeConText}>Free Contant</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
            </ScrollView>
          </View>

          <Text style={Styles.courseText}>Courses in progress</Text>

          <CourseList
            img={require("../../../assets/Images/Onboarding1.png")}
            title="MatheMatics"
            bg="#fdddf3"
          />
          <CourseList
            img={require("../../../assets/Images/Onboarding1.png")}
            title="Hindi"
            bg="#fef8e3"
          />
          <CourseList
            img={require("../../../assets/Images/Onboarding1.png")}
            title="Science"
            bg="#fcf2ff"
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const Styles = StyleSheet.create({
  welcomeText: {
    paddingHorizontal: 20,
    fontSize: 40,
    fontWeight: 800,
    color: "#FFF",
    fontFamily: "sans-serif-condensed",
  },
  inputDiv: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 20,
  },
  inputLine: {
    fontSize: 12,
    width: 280,
    paddingHorizontal: 12,
  },
  topDiv: {
    flexDirection: "row",
    backgroundColor: "#FFF2F2",
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 30,
    paddingLeft: 30,
  },
  topDivText: {
    color: "#345c74",
    fontSize: 20,
    width: 250,
    paddingRight: 100,
    fontFamily: "sans-serif-condensed",
  },
  topDivButton: {
    flexDirection: "row",
    backgroundColor: "#f58084",
    alignItems: "center",
    marginTop: 20,
    width: 150,
    paddingVertical: 10,
    borderRadius: 14,
    paddingHorizontal: 10,
  },
  topDivButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
  },
  courseText: {
    fontSize: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#fff",
    fontFamily: "sans-serif-condensed",
  },
  freeConText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#fff",
    fontFamily: "sans-serif-condensed",
  },
});
