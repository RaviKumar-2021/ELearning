import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import VideoCard from "./Components/VideoCard";

function Learning({ navigation }) {
  const windowHeight = Dimensions.get("window").height;

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
            <VideoCard navigation={navigation} />
            <VideoCard navigation={navigation} />
            <VideoCard navigation={navigation} />
            <VideoCard navigation={navigation} />
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}

export default Learning;
