import React from "react";
import user from "../../../assets/Json/user.json";
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
import { FontAwesome5 } from "@expo/vector-icons";

function Home({ navigation }) {
  console.log(user);
  return (
    <>
      <ImageBackground
        source={require("../../../assets/Images/3.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView
          style={{
            marginVertical: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
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
              <Text style={Styles.topDivText}>Lets start learning with us</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Courses")}
                style={Styles.topDivButton}
              >
                <Text style={Styles.topDivButtonText}>Classes</Text>

                <FontAwesome5
                  name="arrow-right"
                  size={18}
                  color="#fff"
                  style={{
                    marginLeft: 50,
                    width: 20,
                    marginTop: 3,
                    height: 20,
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
              <NoticeCard title="Study Material" icon="file-pdf-o" />
              <NoticeCard title="Sample Papers" icon="file-text-o" />
            </ScrollView>
          </View>

          <Text style={Styles.courseText}>Courses in progress</Text>
          <CourseList
            img={require("../../../assets/Images/Onboarding1.png")}
            title="Hindi"
            bg="#fef8e3"
            navigation={navigation}
          />
          <CourseList
            img={require("../../../assets/Images/Onboarding1.png")}
            title="Science"
            bg="#fcf2ff"
            navigation={navigation}
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const Styles = StyleSheet.create({
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
    paddingLeft: 10,
    paddingBottom: 3,
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

export default Home;
