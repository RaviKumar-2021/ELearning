import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import ProfileDrowDownBtn from "./Components/ProfileDrowDownBtn";
function Profiles() {
  const basicInfo = {
    name: "Ravi Kumar",
    nobileNo: "9254701771",
    email: "Ravi@gmail.com",
    about: "Hello Moto..",
    DOB: "10-08-1999",
  };
  const personalInfo = {
    name: "Ravi",
    age: "20",
    gender: "male",
    status: "Unmarried",
  };
  const addressInfo = {
    village: "Wazirpur",
    Distic: "Gurgaon",
    State: "Haryana",
    Countray: "India",
  };

  return (
    <ImageBackground
      source={require("../../../assets/Images/3.png")}
      style={{ position: "absolute", height: "100%", width: "100%" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View style={Styles.profileImageDiv}>
            <Image
              source={require("../../../assets/Images/User.png")}
              style={Styles.profileImage}
            />
          </View>
          <View>
            <Text style={{ fontSize: 35, fontFamily: "sans-serif-condensed" }}>
              Ravi Kumar
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "sans-serif-condensed" }}>
              Ravi@gmail.com
            </Text>
          </View>
          <TouchableOpacity style={Styles.profileBtn}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <ProfileDrowDownBtn heading="Basic Information" data={basicInfo} />
          <ProfileDrowDownBtn
            heading="Personal Information"
            data={personalInfo}
          />
          <ProfileDrowDownBtn heading="Address" data={addressInfo} />
          <ProfileDrowDownBtn heading="Education Details" data={basicInfo} />
          <TouchableOpacity style={Styles.logbtnBtn}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const Styles = StyleSheet.create({
  profileImageDiv: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    padding: 10,
  },
  profileImage: {
    height: 100,
    width: 100,
  },
  profileBtn: {
    backgroundColor: "#f58084",
    borderRadius: 10,
    alignItems: "center",
    width: 200,
    marginTop: 20,
    padding: 10,
  },
  logbtnBtn: {
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    marginTop: 20,
    padding: 10,
  },
});

export default Profiles;
