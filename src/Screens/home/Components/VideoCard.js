import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function VideoCard({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("VideoClasses")}>
      <View style={Styles.topSection}>
        <View style={Styles.imageDiv}>
          <Image
            source={require("../../../../assets/Images/Play.png")}
            style={Styles.image}
          />
        </View>
        <View style={Styles.textDiv}>
          <Text style={Styles.contentTitle}>
            The Basic Of Computer Fundaments
          </Text>
          <Text style={Styles.contentTime}>10:15</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  topSection: {
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    overflow: "hidden",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
    marginBottom: 3,
    borderRadius: 10,
    gap: 10,
  },
  imageDiv: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 60,
    width: 60,
  },
  textDiv: {
    width: "60%",
  },

  contentTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
  },
  contentTime: {
    fontSize: 14,
    fontFamily: "sans-serif-condensed",
    color: "#a9a9a9",
  },
});

export default VideoCard;
