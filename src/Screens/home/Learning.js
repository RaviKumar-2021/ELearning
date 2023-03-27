import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import VideoCard from "./Components/VideoCard";
import user from "../../../assets/Json/user.json";
function Learning({ navigation }) {
  const [logData, setlogData] = useState("");
  const windowHeight = Dimensions.get("window").height;
  data = async () => {
    const userEmail = await AsyncStorage.getItem("email");
    const userData = await user.user.find((e) => e.email == userEmail);
    setlogData(userData.course);
  };
  data();

  return (
    <>
      <ImageBackground
        source={require("../../../assets/Images/3.png")}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text></Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: windowHeight - 100 }}
          >
            <View style={{ display: logData.length > 0 ? "flex" : "none" }}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("VideoClasses", { id: props.id })
                }
              >
                <VideoCard navigation={navigation} prop />
              </TouchableOpacity>
            </View>
            <View style={{ display: logData.length > 0 ? "none" : "flex" }}>
              <Text>Data Not Found</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}

export default Learning;
